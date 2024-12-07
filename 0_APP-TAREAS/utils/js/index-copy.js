//FUNCIONA LOS ARRAYS EN TODOS, PERO NO EN INDIVIDUAL
//todo Ya funciona guardar, ahora implementar solo guardar si hay datos
//ultima opcion, los VALUES del select pasarlos a string y probar

let tituloInput = document.querySelector("#tituloInput")
let descripInput = document.querySelector("#descripInput")
let maxDateInput = document.querySelector("#maxDateInput")
let contadorIds = 1
let btnGuardar = document.querySelector("#btnGuardar")
//Direccion donde se mete el resultado
let divResultado = document.querySelector(
  "div.row.mt-3.row-cols-1.row-cols-md-3.g-4"
)

//FILTROS BUSQUEDA
let selectFilter = document.querySelector("#selectFiltrado")

let tareas = [] //meter todas las tareas en array

btnGuardar.addEventListener("click", (e) => {
  let id = contadorIds
  let titulo = tituloInput.value
  let descripcion = descripInput.value
  let fechaMax = maxDateInput.value
  let priority = document.querySelector("input[name='options']:checked")

  if (
    titulo.length > 0 &&
    descripcion.length > 0 &&
    fechaMax.length > 0 &&
    priority.value.length > 0
  ) {
    let nueva = new Tarea(
      contadorIds,
      titulo,
      descripcion,
      fechaMax,
      priority.value
    )
    contadorIds++

    tareas.push(nueva) //añadimos la tarea al array, para luego filtrar

    agregarNodoTask(titulo, descripcion, priority, fechaMax)
    alertTaskSaved()
    clearInputs()
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
  let columna = document.createElement("div")
  columna.className = "col g-1 animate__animated animate__fadeInDown" //todo: quitar g1 si no va bien

  let carta = document.createElement("div")
  carta.className = "card h-100"

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
  } else if (prioridadTarea.value == 3) {
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

  //todo btn Finaliza y check implementar cuando funcione el resto

  /* let divFinalizado = document.createElement("div")
  divFinalizado.className = "completar "

  let rowFinaliza = document.createElement("div")
  rowFinaliza.className = "row"
  divFinalizado.append(rowFinaliza)

  let col4 = document.createElement("div")
  col4.className = "col-2"
  rowFinaliza.append(col4)

  let checkFinaliza = document.createElement("input")
  checkFinaliza.type = "checkbox"
  checkFinaliza.value = "finalizar"
  checkFinaliza.id = "finalizarTarea"
  col4.append(checkFinaliza)

  let col8 = document.createElement("div")
  col8.className = "col-10"
  rowFinaliza.append(col8)



  let btnFinaliza = document.createElement("button")
  btnFinaliza.className="btn btn-success w-100"
  btnFinaliza.innerText="Finalizar"
  divFinalizado.append(btnFinaliza) */

  carta.append(cardBody)
  carta.append(imagen)
  carta.append(fechaUl)
  //carta.append(divFinalizado)
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

selectFilter.addEventListener("change", (e) => {
  let urgencia = selectFilter.value
  let listaFiltrada = []

  //todo YO CREO QUE EL PROBLEMA ESTA AQUI, que no agrega al array las opciones diferentes de 4
  if (urgencia != 4) {
    listaFiltrada = tareas.filter((item) => {
      //retornará true o false, si es true, lo añade a listaFiltrada
      return item.prioridad == urgencia
    })
  } else {
    listaFiltrada = tareas // todas las tareas
  }
  console.log(urgencia)
  console.log(listaFiltrada)

  representarTareas(listaFiltrada)
}) //cierre boton FILTRAR

function representarTareas(tareas) {
  //vaciamos el div resultado
  divResultado.innerHTML = ""

  tareas.forEach((item) => {
    //todo chatGPT me dice poner {value: item.prioridad}
    agregarNodoTask(
      item.titulo,
      item.descripcion,
      { value: item.prioridad },
      item.fechaMax
    )
  })
}

//todo, crear funcion representarFiltro, donde ira el inner que borra
//todo, solucionar el class animated ( solo al agregar tareas, no al filtrar)
