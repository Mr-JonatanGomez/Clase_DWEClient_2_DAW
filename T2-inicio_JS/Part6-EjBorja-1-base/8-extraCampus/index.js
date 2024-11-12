/* 
1. Pedir al user un numero
2. Pedir al user otro numero
3. Mostrar un alert de dos lineas
        -el resultado de sumar ambos es:
        -texto: gracias por usar este programa

*/

/* let num1 = prompt("Introduce un numero")
num1 = parseInt(num1)//parseo para comvertir a numero
let num2 = prompt("Introduce otro numero")
num2= Number(num2)//otro tipo parseo */

let num1 = Number(prompt("Introduce un numero"))

let num2 = Number(prompt("Introduce otro numero"))

let result = num1 + num2

alert(
  `El resultado de sumar ${num1} y ${num2}, es ${result}\nGracias por usar este ejercicio`
)
6


