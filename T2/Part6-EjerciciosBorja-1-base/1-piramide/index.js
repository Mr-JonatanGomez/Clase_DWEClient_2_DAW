/* 1. Piramide

Escriba un script que pedido por consola (prompt un número), 
represente por consola la siguiente figura con el número de 
filas introducido en el prompt.En el caso de no introducir 
un número o que sea menor que 0 saltará un aviso por consola 
y dará la posibilidad de repetir el proceso:

```
Cuantas filas quieres que aparezca: 7

+
++
+++
++++
+++++
++++++
+++++++

``` */
Swal.fire({
  title: "Welcome to JonGo.DevIT!\n The Pyramid Game",
  timer: 3000, //tiempo en ms
  text: "Loading...",
  timerProgressBar: true, // evidente
  allowOutsideClick: false, //no se desactiva el alert si clicas fuera
  didOpen: () => {
    Swal.showLoading() // Muestra un icono de carga mientras está activo
  }
}).then(() => {
  
rowPyramid() //metemos la function para enlazar el swal mas comodamente
}) 

function rowPyramid (){
  Swal.fire({
    title: "How many rows do you need in your Pyramid?",
    icon: "question",
    input: "number",
    inputLabel: "Your rows"
  }).then((result) => {
    const totalRowsPyramid = result.value
    let actualRows = "+"
    let logsConsoleHTML=""// para sacarlo en HTML
    
    for (let index = 0; index < totalRowsPyramid; index++) {
      console.log(actualRows + "\n")
      logsConsoleHTML += actualRows + "\n"// este es para sacarlo por html
      actualRows += "+"
    }

    //acceso por getElement es en Script, yo intentaba en html
    document.getElementById("pyramid").innerText = logsConsoleHTML
    // chat dice innerText, porque el value, debe
  })

}




/* Swal.fire("SweetAlert2 is working!")

Swal.fire({
  title: "Welcome to JonGo.DevIT!",
  text: "Are you here voluntarily?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Yes",
  denyButtonText: `No` 
}) */
