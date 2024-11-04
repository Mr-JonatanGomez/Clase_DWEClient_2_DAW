/* 2. Crear un array vacío, luego generar 20 números al azar y 
guardarlos en un array. Una vez generados realiza las siguientes 
acciones: 

- Muestra por consola los pares
- Muestra por cosola todos los numeros
- Muestra el número máximo
- Muestra el número mínimo
- Muestra la media */


// console.log(Math.floor(Math.random()*99+1)) el math floor saca sin decimales


 let array = []

for (let i = 0; i < 20; i++) {
    let aleatorio= Math.floor(Math.random()*99+1)
    array.push(aleatorio)
} 

console.log(array)

for (let i = 0; i < array.length; i++) {
    if (array[i]%2==0) {
        console.log(array[i])
    }
    
}

const numMax= Math.max(...array)
const numMin= Math.min(...array)

console.log(numMax);
console.log(numMin);

let sumaArray=0
for (let i = 0; i < array.length; i++) {
    sumaArray+=array[i]
    console.log(sumaArray);
    
    
}
let media= sumaArray/array.length

console.log(`La media de tu array es ${media}`);



