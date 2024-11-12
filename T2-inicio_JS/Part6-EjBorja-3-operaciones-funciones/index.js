/* 
1. Operaciones funciones 

Pedir al usuario que introduzca por teclado dos números y 
mediante funciones mostrar el resultado de todas las operaciones 
en un cuadro de alerta

2. Modifica el ejercicio anterior para que en el caso de no 
introducir un sengundo parámetros, el valor por defecto que 
tomará el segundo operadores será de 0

3. Modifica el ejercicio anterior para que todas las funciones 
pidan por parámetros dos elementos. En el caso de que pase 
1 o más de dos parámetros la ejecución saltará un error de 
excepción */

let continuar = false
do {
    let numA = prompt("Introduce un numero A")
    let numB = prompt("Introduce un numero B")

    //pasamos vacio como null
   
    //parseo y variable para char
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

    if (numA==null) {
        numA = numB
        numB = 0
        alert(
            'metiste un valor null en numero A\n' +
            'entonces A, tomo el valor de B\n'+
            'y B, tomó el valor 0'
        )
    } else if(numB == null){
        numB=0
        alert(
            'metiste un valor null en numero B\n'+
            'y B, tomó el valor 0'
        )
    } else if (numB == null && numB == null){
        numA = 0
        numB = 0
        alert(
            'metiste un valor null en A y B\n' +
            'entonces ambos toman valor de 0'
        )
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
                `Lo sentimos, no es posible operar con 0, ni con letras, \n.
                y tu estas intentando operar:\n    
                como primer operando: ${charA}\n    
                como segundo operando: ${charB}`
                )
        } else {
            alert(
            `Lo sentimos, no es posible operar con 0, ni con letras, \n
            y tu estas intentando operar:\n    
            como primer operando: ${charA}\n    
            como segundo operando: ${charB}`
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
