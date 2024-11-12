console.log("Esto es mi codigo JS sin  embeber")
// con Shift + Alt + A comenta lo seleccionado
// NO TIPADO, es el navegadir ek que decide el tipo de la variable ( String, int, boolean...)

//variable (FINAL)
const nombreAsignatura = "DWEC"
// nombreAsignatura = "midfj"// da un error, SE VE EN CONSOLE EN EL NAV

//variable de bloque (LET) si metemos en un if la var, no podemos imprimir fuera de ese if
let nomb = "pepe"
nomb = "Felipe"

//var global //accesible desde cualquier lugar, este tipo es mejor usarlo... NUNCA (Borja Martin)
var apellido = "Sanz"

//TIPOS DE VARIABLE
let nombre = "Jonatan" //String
let edad = 37 // number
let altura = 1.79 // number ( no diferencia decimal de entero)
let inteligente = true // bool
let fechaNacimiento = new Date("1987-08-25T12:45") // tipo Object - Date meter en String
let notas = [] //array
let asignaturas = new Set() //como arraylist, no admite duplicados
let sinValor = null // null tipico
let sinDefinir // undefined
//NaN --> Not a Number

console.log(fechaNacimiento)
// FECHA("1987-08-25T12:45") meter en String, tras el dia, T indica la hora

console.log(fechaNacimiento.toLocaleString("es-ES")) //asi pasarle el horario local

//para ver sus tipos usar el typeof, se usa como el instanceof de Java

/* MUY IMPORTANTE, Si en un index.html metemos dos archivos de JS, index.js y second.js
el que va despues, puede usar las variables del que se declara PromiseRejectionEvent, 
y por consiguente no puede llevar variables con el mismo nombre

Ejemplo : 
     index.js (let nombre = "Pepe")
     second.js (let nombre " Mariano")
n
     Daria error, ya que hay dos variables en el documento index.html con el mismo nombre */
