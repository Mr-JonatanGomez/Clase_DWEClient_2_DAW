//Array
// las constantes no se puede alterar su valor
const equipos = ["Atleti", "Madrid", "Barcelona", "Rayo"]
// si declaramos un equipo en [10], los 5,6...seran undefined


equipos[1]= "R.Madrid" //ojo, si se puede cambiar nombre
equipos[4]= "Las Palmas" // añade a posicion 4
equipos[10]= "Villareal" // añade a posicion 10 y del 5-9 son Undefined

console.log(equipos)

//FOR IN
//es for key valor...la key es el INDEX
for (const key in equipos) {
  console.log(key)//saca los index
}


//FOR OF es como foreache de JAVA
for (const item of equipos) {
  console.log(item +" del forof");
  
}


// FOREACH es una funcion ( no es como java) que nos permite iterar y modificar
//con 3 parametros, elemento, indice y lo que recorres
// solo aplicable a los arrays.

equipos.forEach((value, index, array) => {})

//AÑADIR ,
equipos.push("Getafe") //en el final del array
equipos.unshift("Real Sociedad") //al principio

//BORRAR
equipos.pop() // elimina ultimo y dice su nueva longitud
equipos.shift() //elimina el primero y lo retorna

//FILTRAR

//filtrar FIND -->Primer elemento que coincida
//buscar equipo con al menos 7 letras
let busqueda = equipos.find((item) => {
  //retornar true cuando item cumole la condicion de busqueda

  return item.length >= 7
  // devuelve string, si hay, o undefined
})

console.log(busqueda)

//Filtrar FILTER --> Todos los elementos que coinciden

/* equipos
  .filter((item) => {
    return itemitem.length >= 7
  })
  .forEach((item) => {}) */

//si no encuentra nada return array vacio, no undefined
