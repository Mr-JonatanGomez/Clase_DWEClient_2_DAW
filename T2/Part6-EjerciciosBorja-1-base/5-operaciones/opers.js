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

let numA = Number(prompt("Introduce un numero"))
let numB = Number(prompt("Introduce un numero"))

let suma = (a, b) =>{
    return a+b
  }
  let resta = (a, b) =>{
    return a-b
  }
  let mult = (a, b) =>{
    return a*b
  }
  let div = (a, b) =>{
    return a/b
  }
  alert(`Las operaciones posibles con tus numeros ${numA} y ${numB} son:\n'+
    'SUMA con un resultado de ${suma(numA, numB)}\n`+
    `RESTA con un resultado de ${resta(numA, numB)}\n`+
    `MULTIPLICACION con un resultado de ${mult(numA,numB)}\n`+
    `DIVISION con un resultado de ${div(numA,numB)}`
)

//todo hacer con sweetAlert para dar funcionalidad de botnones para seguir o no seguir. con los propmpt normales no se puede
