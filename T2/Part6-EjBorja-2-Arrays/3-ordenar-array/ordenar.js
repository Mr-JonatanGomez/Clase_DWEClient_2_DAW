/* 3. Crea un array con los siguientes valores: 

```javascript
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
```

Una vez tengas introducidos todos los valores realiza las siguientes tareas: 

- Ordena el array y obten el valor máximo y mínimo
- Obtén la medida de edad */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort((a,b)=> a - b)

console.log(ages);

const minAges = Math.min(...ages)
const maxAges = Math.max(...ages)

console.log(minAges);
console.log(maxAges);

// se puede sacar tras haber ordenado, con el index 0 y el index .length -1
let sumaEdades= 0
for (let i = 0; i < ages.length; i++) {
    sumaEdades += ages[i]   
}
let media = sumaEdades/ages.length
console.log(media);


