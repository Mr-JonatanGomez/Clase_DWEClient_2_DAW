//Array
// las constantes no se puede alterar su valor
const equipos = ["Atleti", "Madrid", "Barcelona", "Rayo"]
// si declaramos un equipo en [10], los 5,6...seran undefined

equipos[1] = "R.Madrid" //ojo, si se puede cambiar nombre
equipos[4] = "Las Palmas" // añade a posicion 4
equipos[10] = "Villareal" // añade a posicion 10 y del 5-9 son Undefined

console.log(equipos)

//FOR IN
//es for key valor...la key es el INDEX
for (const key in equipos) {
  console.log(key) //saca los index
}

//FOR OF es como foreache de JAVA
for (const item of equipos) {
  console.log(item + " del forof")
}

// FOREACH es una ARROW-FUNCTION ( no es como java) que nos permite iterar y modificar
//con 3 parametros, elemento, indice y lo que recorres

// solo aplicable a los arrays. y retorna void

//acepta3 parametros, pero no es obligatorio los 3
equipos.forEach((value, index, array) => {})
//si solo se necesita value lo creamos solo con el value
// equipos.forEach((value) => {})

equipos.forEach((teams, index, equipos)=>{
  console.log(teams +  ", su index es: "+ index)
})

console.log("Sacamos con Foreach solo los que tengan index par");

equipos.forEach((teams, index, equipos)=>{
  if (index %2==0) {
    console.log(teams +  ", su index es: "+ index)
  }
})

//AÑADIR ,
equipos.push("Getafe") //en el final del array
equipos.unshift("Real Sociedad") //al principio
equipos.unshift("Athletic") //al principio
equipos.unshift("Real Betis") //al principio

console.log(equipos.length);


//BORRAR
equipos.pop() // elimina ultimo y dice su nueva longitud
equipos.shift() //elimina el primero y lo retorna

  //tambien podemos eliminar e imprimir
  console.log(`Elemento eliminado correctamente: ${equipos.shift()}`);
  
console.log(equipos);


//FILTRAR

//filtrar FIND -->Primer elemento que coincida
//buscar equipo con al menos 7 letras
let busqueda = equipos.find((item) => {
  //retornar true cuando item cumple la condicion de busqueda


  return item.length >= 7
  // devuelve string, si hay, o undefined
})

console.log(busqueda)

//Filtrar FILTER --> Todos los elementos que coinciden

let busquedaFilter = equipos.filter((item,equipos)=>{
  return item.length >=7
})

console.log(busquedaFilter);//esto imprime el array

console.log("MODO DE BORJA, filter+foreach");

equipos.filter((element, equipos)=>{
  return element.length >=8
}).forEach((element)=>{
  console.log(element);//esto imprime equipo a equipo
  
})



/* equipos
  .filter((item) => {
    return itemitem.length >= 7
  })
  .forEach((item) => {}) */

//si no encuentra nada return array vacio, no undefined
