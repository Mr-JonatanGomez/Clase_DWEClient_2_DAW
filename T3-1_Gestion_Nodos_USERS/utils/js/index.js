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


    //si lo hacemos por clase, en lugar de pasarle nombre, mail...pasamos user
    function agregarNodo(nombre, mail, genero) {
        //creamos div.col (linea 68) con su classNmae
        let columna = document.createElement("div")
        columna.className = "col"
        //div.card animated...(linea 69)y asi sucesivamente
        let carta = document.createElement("div")
        carta.className = "card animate__animated animate__fadeInDown"
        let imagen = document.createElement("img")
        imagen.className = "card-img-top"
        if (genero == 1) {
          imagen.src = "https://cdn-icons-png.flaticon.com/512/7084/7084424.png"
        } else {
          imagen.src = "https://cdn-icons-png.flaticon.com/512/6889/6889369.png"
        }
        let cardBody = document.createElement("div")
        cardBody.className="card-body"

        let nombreCard = document.createElement("h5")//no necesita class porque ya va el contenido
        nombreCard.innerText= nombre 
        cardBody.append(nombreCard)//agregamos el nombre al cuerpo de la carta

        let mailCard = document.createElement("h6")// correo en lugar de cardtext
        mailCard.innerText=mail
        cardBody.append(mail)


        let gender = document.createElement("h6")
        if (genero==1) {
            gender.innerText="masculino"
        }else{
            gender.innerText="femenino"
        }
        cardBody.append(gender)

        /*ahora se monta el modo en que va la card, 
        imagen-cardbody-carta*/

        carta.append(imagen)    //la carta lleva imagen
        carta.append(cardBody)  //lleva el cardbody
        columna.append(carta)   //y esto en la columna





        divResultado.append(columna) //el resultado lo metemos dentro de la columna
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
