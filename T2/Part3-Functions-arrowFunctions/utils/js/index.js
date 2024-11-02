//Las funciones son como ya sabia por curso de Moure....aqui añadiremos los datos que no hubiera visto

//funciones con parametros invisibles

function sumar(param1, param2) {
  return param1 + param2
}
console.log(sumar(7, 13)) // resultado 20
console.log(sumar(7)) //resultado NaN, porque suma 7 y Undefined

// DEFAULT PARAM 

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


  //PARAM INVISIBLE

  function multiplicar(param1, param2){
    console.log(param1*param2)

    console.log("metemos impresion de los argumentos en posiciones fuera de param1,2 (0,1)")
    console.log("umprimiendo poscion 2 que es un 5: y sale ="+ arguments[2])
    console.log("umprimiendo poscion 3 que es un 2: y sale ="+ arguments[3])

    console.log(arguments.length)//saca la cantidad de argumentos que tiene




    return param1*param2
  }

  multiplicar(7,3,5,2,3,4,6)


  //FUNCIONES FLECHA  -- ARROW FUNCTIONS or LAMBDA --funciones rapidas

  //1 primero creamos una variable y la enlazamos a la funcion -- let suma =
  //2 le damos los parametros y =>{cuerpo de funcion}

  let sumaFlecha= (param1, param2)=>{console.log(param1+param2)}//esto retorna void porque es log
  sumaFlecha(8,3)

  //arrow one line, la operacion sin llaves {}
  let restaFlecha= (param1, param2)=>param1-param2//retorna numero
  //comprobamos
  let comprobacion=restaFlecha(8,3)

  console.log(typeof comprobacion);

  //ARROW larga con return

  let restarLarga = (paramA, paramB) =>{
    return paramA-paramB
  }
   







  
