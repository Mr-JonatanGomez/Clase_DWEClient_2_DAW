//let nombre = "Jonatan"
//let edad = 37
//console.log(`Hola ${nombre} este es el primer programa JS`)
let nombre = "" //definimos nombre en vacio, para que no salte error por no estar definido antes
let edad = 0
let estatura = 0.0
// TRES MODOS DE INTERACTUAR CON EL USUARIO

//1. ALERT - mensaje que muestra lo que queramos y la opcion aceptar
//2. PROMPT - permite introducir datos mediante el mensaje

alert("Bienvenido a la pagina, mostrado con un simple alert")
//su retorno es tipo void

//su retorno es tipo STRING, aunque se puede cambiar al tipo que quieras de las siguientes formas

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
//todo FIN de la funcion

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

//3. CONFIRM - ES una respuesta boolean

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
