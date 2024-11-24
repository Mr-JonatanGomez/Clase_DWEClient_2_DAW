/* 
1. Dado el array = [1,2,3,4,5,6,7,8,9,10]


- Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
- Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
- Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
- Calcular la media de todos los elementos del array */

let array1 = [1,2,3,4,5,6,7,8,9,10]
let index = 0

while (index < array1.length){
  console.log(array1[index])
  index++
}



for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

array1.forEach((value) => {
  console.log(`imprimiendo valor mediante forEach ${value}`);
  
});
  
/* for (let i = 0; i < array1.length; i++) {
  array1[i]+=1
  console.log(`Mostrando el array sumando 1: ${array1[i]}`)
} */

let sumaArray = 0
for (let i = 0; i < array1.length; i++) {
  sumaArray+= array1[i]
}
let media = sumaArray/array1.length
console.log(sumaArray);
console.log(`la media del array es: ${media}`);


