/* 
5. Operaciones

Pedir dos números por teclado y mostrar en una alerta todos las 
operaciones posibles para dichos números (suma, resta, 
multiplicación y división). Adicionalmente el programa hará lo 
siguiente:

- si se introduce números menores que 0 o letras que salte una 
    alerta indicando el error y el programa parará
- tras mostrar todas las operaciones se pedirá confirmación al 
    usuario para que indique si quiere continuar realizando 
    operaciones: en caso positivo el programa volverá a empezar. 
    En caso negativo el programa parará
- si se detecta que alguna de las operaciones es negativa el 
programa parará tras realizar todas las operaciones de los números
*/
let continuar = false
do {
  let numA = prompt("Introduce un numero")
  let numB = prompt("Introduce un numero")
  //parseo y var para char
  charA = numA
  charB = numB

  numA = Number(numA)
  numB = Number(numB)

  let resultadoSum
  let resultadoRes
  let resultadoMul
  let resultadoDiv

  let suma = (a, b) => {
    resultadoSum = a + b
    return a + b
  }
  let resta = (a, b) => {
    resultadoRes = a - b
    return a - b
  }
  let mult = (a, b) => {
    resultadoMul = a * b
    return a * b
  }
  let div = (a, b) => {
    resultadoDiv = a / b
    return a / b
  }

  if (!isNaN(numA) && !isNaN(numB) && numA != 0 && numB != 0) {
    alert(
      `SUMA con un resultado de ${suma(numA, numB)}\n` +
        `RESTA con un resultado de ${resta(numA, numB)}\n` +
        `MULTIPLICACION con un resultado de ${mult(numA, numB)}\n` +
        `DIVISION con un resultado de ${div(numA, numB)}`
    )
  } else {
    if (
      (isNaN(numA) && isNaN(numB)) ||
      (numA == 0 && numB == 0) ||
      (isNaN(numA) && numB == 0) ||
      (isNaN(numB) && numA == 0)
    ) {
      alert(
        `Lo sentimos, no es posible operar con 0, ni con letras, \ny tu estas intentando operar:\n    como primer operando: ${charA}\n    como segundo operando: ${charB}`
      )
    } else if (isNaN(numA) || numA == 0) {
      alert(
        `Lo sentimos, no es posible operar con 0, ni con letras, \ny tu estas intentando operar:\n    como primer operando: ${charA}\n    como segundo operando: ${charB}`
      )
    } else {
      alert(
        `Lo sentimos, no es posible operar con 0, ni con letras, \ny tu estas intentando operar:\n    como primer operando: ${charA}\n    como segundo operando: ${charB}`
      )
    }
  }

  //condicion menor que 0 para salir
  let salida = false
  if (
    resultadoSum < 0 ||
    resultadoRes < 0 ||
    resultadoMul < 0 ||
    resultadoDiv < 0
  ) {
    salida = true
    alert(
      "Has alcanzado la condicion de salida del programa, Obtener un resultado menor que 0"
    )
    break
  }

  continuar = confirm("Quieres continuar con operaciones??")

  if (continuar) {
    alert("Cargando...")
  } else {
    alert("FIN DEL PROGRAMA")
  }
} while (continuar)
