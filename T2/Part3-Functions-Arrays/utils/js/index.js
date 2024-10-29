//Las funciones son como ya sabia por curso de Moure....aqui añadiremos los datos que no hubiera visto

//funciones con parametros invisibles

function sumar(param1, param2) {
  return param1 + param2
}
console.log(sumar(7, 13)) // resultado 20
console.log(sumar(7)) //resultado NaN, porque suma 7 y Undefined

// Vamos a darle valor por defecto param de la funcion

function resta(param1, param2 = 2) {
  return param1 - param2
}

console.log("\nvamos a llamar a resta(8), el param2 es por defecto 2, resultado:")
console.log(resta(8))

// el parametro por defecto NO puede ser el primero, es posicional, 
// a no ser que los siguientes tambien lo tengan

function sumarParamDefecto1(param1=0, param2) {
    console.log(`parametro 1 = ${param1}, parametro 2 = ${param2}`) // resultado 20
    return param1 + param2
  }
  console.log(sumarParamDefecto1(7)) //da NaN porque el segundo esta vacio

  function sumarParamDefectoTodos(param1=5, param2=3) {
    console.log(`parametro 1 = ${param1}, parametro 2 = ${param2}`) // resultado 20
    return param1 + param2
  }
  console.log(sumarParamDefectoTodos(7)) //dara 10, ya que el primero se lo damos y el segundo coge el 3 del defecto
