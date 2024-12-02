//todo Ya funciona guardar, ahora implementar solo guardar si hay datos

let tituloInput = document.querySelector("#tituloInput")
let descripInput = document.querySelector("#descripInput")
let maxDateInput = document.querySelector("#maxDateInput")
let contadorIds = 1
let btnGuardar = document.querySelector("#btnGuardar")

let divResultado = document.querySelector(
  "div.row.mt-3.row-cols-1.row-cols-md-3.g-4"
)
//row mt-3 row-cols-1 row-cols-md-3 g-4

btnGuardar.addEventListener("click", (e) => {
  let id = contadorIds
  let titulo = tituloInput.value
  let descripcion = descripInput.value
  let fechaMax = maxDateInput.value
  let priority = document.querySelector("input[name='options']:checked")
  let prioridad = ""

  if (
    titulo.length > 0 &&
    descripcion.length > 0 &&
    fechaMax.length > 0 &&
    priority.value.length > 0
  ) {
    //todo aqui agregamos nodo

    let nueva = new Tarea(contadorIds, titulo, descripcion, fechaMax, prioridad)
    contadorIds++
    console.log(
      `id: ${nueva.id}\nTarea: ${nueva.titulo}\nDescrip: ${nueva.descripcion}\nFecha: ${nueva.fecha}\nPrioridad: ${nueva.prioridad}`
    )
    agregarNodoTask(titulo, descripcion, priority, fechaMax)
    alertTaskSaved()
    clearInputs() //implementar despues solo cuando usuario este guardado
  } else {
    alertFaltanDatos()
  }
}) //cierre boton guardar

function agregarNodoTask(
  tituloTarea,
  descripcionTarea,
  prioridadTarea,
  fechaMaxTarea
) {
  /* 
    <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <img src="..." class="card-img-top">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
              </div>
    */
  let columna = document.createElement("div")
  columna.className = "col g-1" //todo: quitar g1 si no va bien

  let carta = document.createElement("div")
  carta.className = "card h-100 animate__animated animate__fadeInDown"

  //ahora las variables
  let cardBody = document.createElement("div")
  cardBody.className = "card-body"

  let titulo = document.createElement("h5")
  titulo.innerText = tituloTarea
  cardBody.append(titulo)

  let descrip = document.createElement("p")
  descrip.innerText = descripcionTarea
  cardBody.append(descrip)

  let imagen = document.createElement("img")
  imagen.className = "card-img-top"
  if (prioridadTarea.value == 1) {
    imagen.src =
      "https://static-00.iconduck.com/assets.00/high-priority-icon-1024x1024-ryazhwgn.png"
  } else if (prioridadTarea.value == 2) {
    imagen.src =
      "https://static-00.iconduck.com/assets.00/medium-priority-icon-512x512-kpm2vacr.png"
  } else {
    imagen.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tANuBJoViapolNoVPmOHlaaFityDbdvSyyhUVpIL_MvB2K3IS6DNmUXkAtzhOPbbHRc&usqp=CAU"
  }

  let fechaUl = document.createElement("div")
  fechaUl.className = "list-group list-group-flush"

  let labelFecha = document.createElement("p")
  labelFecha.innerText = "Fecha máxima:"
  fechaUl.append(labelFecha)

  let fcha = document.createElement("h6")
  fcha.innerText = fechaMaxTarea
  fechaUl.append(fcha)

  let divCompletado = document.createElement("div")
  divCompletado.className="completar" 

  /* let col4= document.createElement("col")
  col4.className="col-4"
  divCompletado.append(col4)

  let col8= document.createElement("col")
  col8.className="col-8"
  divCompletado.append(col8) */



  let btnFinaliza = document.createElement("button")
  btnFinaliza.className="btn btn-success w-100"
  btnFinaliza.innerText="Finalizar tarea"
  divCompletado.append(btnFinaliza)
  //todo esto para cuando la tarea este finalizada
  /* let btnComplet = document.createElement("button")
  btnComplet.className="btn btn-success w-100"
  btnComplet.innerText="Tarea Completada"
  divCompletado.append(btnComplet) */
  /* let checkCompl = createElement("checkbox")
  divCompletado.append(checkCompl) */

  /*  <button
                id="btnGuardar"
                type="button"
                class="btn btn-primary w-50"
              >
                Guardar
              </button> */


  carta.append(cardBody)
  carta.append(imagen)
  carta.append(fechaUl)
  carta.append(divCompletado)
  columna.append(carta)

  divResultado.append(columna)
  
}

function clearInputs() {
  tituloInput.value = ""
  descripInput.value = ""
  maxDateInput.value = ""
  prioridad = ""

  //resetear los radios
  let resetRadios = document.querySelectorAll("input[name='options']")
  resetRadios.forEach((radio) => (radio.checked = false))
}

function alertTaskSaved() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Tarea agregada correctamente",
    showConfirmButton: false,
    timer: 2200
  })
}

function alertFaltanDatos() {
  Swal.fire({
    position: "center",
    icon: "error",
    title: "Falta algun dato por rellenar",
    showConfirmButton: false,
    timer: 2200
  })
}
