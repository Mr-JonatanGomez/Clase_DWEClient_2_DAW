//definimos nombre en vacio, para que no salte error por no estar definido antes
let edad = 0
let estatura = 0.0

Swal.fire({
  title: "Welcome to JonGo.DevIT!",
  text: "You clicked the button!",
  icon: "success"
})

const { value: nombre } = await Swal.fire({
  title: "Input your name",
  input: "nombre",
  inputLabel: "Your name",
  inputPlaceholder: "Enter your name"
});
if (nombre) {
  Swal.fire(`Entered name: ${nombre}`);
}

//todo funcion flecha para verificar que no lleva numeros, (ESTAS FUNC, SIEMPRE ANTES DE USARLAS)
const tieneNumero = (string) => {
  for (let char of string) {
    if (char >= "0" && char <= "9") {
      alert("tu nombre lleva digitos, introucelos de nuevo")
      return true //si encuentra un numero
    }
  }
  return false // no encuentra numero
}


do {
  nombre = prompt("Por favor introduce tu nombre") // String
} while (tieneNumero(nombre))

//let nombre = prompt("Por favor introduce tu nombre") // String

do {
  edad = Number(prompt("Por favor introduce tu edad"))
  // parseInt - parseFloat convierte a ese tipo, para poder verificar, si le metes letras te dara el NaN
  //...pero da problemas ya que si metes 3f, lo acepta al encontrar primero un number
  if (isNaN(edad)) {
    // si edad es diferente a numero
    alert("Dato incorrecto, edad debe ser numero entero, introduzca de nuevo")
  }
} while (isNaN(edad))

do {
  estatura = Number(prompt("Por favor introduce estatura en metros")) // tambien se puede parsear con Number
  if (isNaN(estatura)) {
    // si edad es diferente a numero
    alert("Dato incorrecto, estatura debe ser numero, introduzca de nuevo")
  }
} while (isNaN(estatura))

//3. CONFIRM - ES una respuesta bollean

let continuar = confirm("Estas seguro de continuar?")
if (continuar) {
  alert(`Hola ${nombre}, tu edad es ${edad} y mides ${estatura} m.`)
  console.log(`Hola ${nombre}, tu edad es ${edad} y mides ${estatura} m.`)
} else {
  alert(`Es una pena ${nombre}, pero has decidido no continuar`)
}

//libreria sweet alert

// los metodos a diferencia de java no necesitan ir en una clase

function saludar(nombre) {
  console.log("Hola ${nomnbre}")
}
//comment
