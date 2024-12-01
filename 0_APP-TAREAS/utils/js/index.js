//todo Ya funciona guardar, ahora implementar solo guardar si hay datos

let tituloInput = document.querySelector("#tituloInput")
let descripInput = document.querySelector("#descripInput")
let maxDateInput = document.querySelector("#maxDateInput")

let contadorIds = 1
let btnGuardar = document.querySelector("#btnGuardar")

btnGuardar.addEventListener("click", () => {
  let id = contadorIds
  let titulo = tituloInput.value
  let descripcion = descripInput.value
  let fechaMax = maxDateInput.value
  let priority = document.querySelector("input[name='options']:checked")
  prioridad = ""
  if (priority) {
    if (priority.value == 1) {
      prioridad = "Urgente"
    } else if (priority.value == 2) {
      prioridad = "Media"
    } else if (priority.value == 3) {
      prioridad = "Baja"
    }
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "No has seleccionado prioridad",
      showConfirmButton: false,
      timer: 2200
    })
  }

  let nueva = new Tarea(contadorIds, titulo, descripcion, fechaMax, prioridad)
  contadorIds++
  console.log(
    `id: ${nueva.id}\nTarea: ${nueva.titulo}\nDescrip: ${nueva.descripcion}\nFecha: ${nueva.fecha}\nPrioridad: ${nueva.prioridad}`
  )
  // clearInputs() implementar despues solo cuando usuario este guardado
})

function clearInputs() {
  tituloInput.value = ""
  descripInput.value = ""
  maxDateInput.value = ""
  prioridad = ""
  let resetRadios = document.querySelectorAll("input[name='options']")
  resetRadios.forEach((radio) => (radio.checked = false))
}

//falta crear el js, para captar los datos y llevarlos a modo de cards al listado de tareas
