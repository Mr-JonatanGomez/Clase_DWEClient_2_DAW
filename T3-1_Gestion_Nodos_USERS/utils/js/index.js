let nombreInput = document.querySelector("#nombreInput")
let emailInput = document.querySelector("#emailInput")
let passInput = document.querySelector("#passInput")
let generoInput = document.querySelector("#generoInput")
let checkGuardar = document.querySelector("#checkGuardar")
let btnGuardar = document.querySelector("#btnGuardar")
let divResultado = document.querySelector("div.row.g-4") //es el unico que cumple la condicion

// ponemos el boton a escuchar

btnGuardar.addEventListener("click", (e) => {
  //con el parametro (e) podemos acceder al pointerEvent
  //      y puedo saber pulsacion exacta, boton derecho, izquierdo...
  //      y el target, quien lo ha provocado, o controlar que solo tenga 8 chars
  //      escuchando cuando cambia el evento por ejemplo

  let nombre = nombreInput.value
  let email = emailInput.value
  let pass = passInput.value
  let genero = generoInput.value
  if (checkGuardar.checked) {
    if (
      nombre.length > 0 &&
      email.length > 0 &&
      pass.length > 0 &&
      genero > 0
    ) {
      //guardar datos

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario guardado",
        showConfirmButton: false,
        timer: 2200
      })
      //agregar user con animate animate__bounceInDown
      // metemos un añadido con append y dentro un nodo creado mediante funcion

      agregarNodo(nombre, email, genero)

      function agregarNodo(nombre, mail, genero) {
        //creamos div.col (linea 60)
        let columna = document.createElement("div")
        columna.className = "col"
        let carta = document.createElement("div")
        carta.className = "card animate__animated animate__fadeInDown"
        let imagen = document.createElement("img")
        imagen.className = "card-img-top"
        if (genero == 1) {
          imagen.src = "https://cdn-icons-png.flaticon.com/512/7084/7084424.png"
        } else {
          imagen.src = "https://cdn-icons-png.flaticon.com/512/6889/6889369.png"
        }

        divResultado.append()
      }

      /* divResultado.innerHTML+=
    `<div class="col ">
        <div class="card animate__animated animate__fadeInDown">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${email}</p>
                
            </div>
        </div>
    </div>` */

      //reseteamos tras guardar

      clearInputs()
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Te falta algun dato",
        showConfirmButton: false,
        timer: 2200
      })
    }
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "NO has seleccionado Guardar",
      showConfirmButton: false,
      timer: 2200
    })
  }
})

passInput.addEventListener("keyup", (e) => {
  /* console.log("texto Cambiado, detectado con keyup, detecta"+ 
        "suma y resta de chars, contando cada pulsacion") */
  //console.log("texto Cambiado, detectado con keypress, solo detecta sumas...")
  //saber los elementos que hay dentro
  /* console.log(e.target.value);
   console.log(e.target.value.length) */
  //LO QUE QUEREMOS ES SACAR LOS DATOS REALES en el btn-GUARDAR
})

function clearInputs() {
  nombreInput.value = ""
  emailInput.value = ""
  passInput.value = ""
  generoInput.value = ""
}
