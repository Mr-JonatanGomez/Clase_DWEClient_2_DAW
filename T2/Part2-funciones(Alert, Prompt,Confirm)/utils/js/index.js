//dLibreria sweetalert2

Swal.fire({
  title: "Welcome to JonGo.DevIT!",
  text: "Are you here voluntarily?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Yes",
  denyButtonText: `No`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    welcome()
  } else if (result.isDenied) {
    Swal.fire(
      "You should come back for the same way that you come, QUICK!....Fucking idiots"
    )
  }
})

function propmptEdad() {
  Swal.fire({
    title: "How old are you?",
    icon: "question",
    input: "range",
    inputLabel: "Your age",
    inputAttributes: {
      min: "0",
      max: "99",
      step: "0.5"
    },
    inputValue: 25
  }).then((result) => {
    //para guardar el valor del user
    const edad = result.value

    if (edad >= 18) {
      Swal.fire({
        title: "Access Granted to JonGo.DevIT",
        text: "Welcome! You are allowed to stay on the page.",
        icon: "success"
      })
    } else {
      Swal.fire({
        title: "Access denied to JonGo.Dev_CASINO",
        text: "Sorry! This page is for adults only.",
        icon: "error"
      })
    }
  })
}
function welcome() {
  Swal.fire({
    title: "Welcome to JonGo.DevIT!",
    text: "You clicked the button!",
    icon: "success"
  }).then((result) => {
    if (result.isConfirmed) {
      propmptEdad()
    }
  })
}
/* 
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
 */
