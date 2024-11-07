/*4. Crea un array vacío llamado baraja de tipo string. Mete de golpe 
todas las cartas de la baraja francesa con el siguiente formato:

```javascript
1C,2C,3C,4C....,JC,QC,KC
1D,2D,3D,4D....,JD,QD,KD
1R,2R,3R,4R....,JR,QR,KR
1P,2P,3P,4P....,JP,QP,KP
```

Una vez creado el array baraja las cartas para que se desordenen. 
Puedes utilizar alguna librería externa como por ejemplo underscore

5. Continuando con el ejercicio anterior, ves sacando por consola cartas de la baraja cada 5 segundos. Hay que tener en cuenta que cuando una baraja se tiene que quitar del mazo para que no pueda volver a salir. Una vez salga la varaba tendrás que poner el siguiente mensaje: 

```javascript
Carta KC
Valor: 13
Palo: C

Carta 7T
Valor: 7

//todo solo me falta hacer el retardo de sacar cada 2 segundos

*/

let baraja = []

function agregarCartas(suit){
    let numeracion = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    for (let item of numeracion) {
        baraja.push(item+suit)
    }
}

agregarCartas("C") //black trebol-clubs
agregarCartas("D")//red diamante-diamonds
agregarCartas("H")//red corazon-hearts
agregarCartas("S")//black pica-spades

console.log(baraja)

//requerimos el underscore para poder usarlo
const _ = require('underscore');

let barajaDesordenada = _.shuffle(baraja)

function sacarCartasRetardo(retardoEnMs){
    for (let i = 0; i < barajaDesordenada.length; i++) {
        setTimeout(() => {
        let item = barajaDesordenada[i]
        let valor = item.substring(0,item.length-1)
        let suit = item.charAt(item.length-1)
        let color
    
        if (suit == "C") {
            suit="Clubs"
            color="black"
        }else if(suit == "D"){
            suit="Diamonds"
            color="red"
        }else if(suit == "H"){
            suit="Hearts"
            color="red"
        }else {
            suit="Spades"
            color="black"
        }
        if (isNaN(valor)) {
            if (valor=="A") {
                valor=1
            }else if (valor=="J") {
                valor=11
            }else if (valor=="Q") {
                valor=12
            }else if (valor=="K") {
                valor=13
            }
        }
    
        console.log(`Carta: ${item}\nValor: ${valor} de ${suit}\n`) //esto es lo que necesita el retardo
        
        }, i * retardoEnMs)
        
    }
}
function sacarCartas(){


    for (let item of barajaDesordenada) {
        let valor = item.substring(0,item.length-1)
        let suit = item.charAt(item.length-1)
        let color
        if (suit == "C") {
            suit="Clubs"
            color="black"
        }else if(suit == "D"){
            suit="Diamonds"
            color="red"
        }else if(suit == "H"){
            suit="Hearts"
            color="red"
        }else {
            suit="Spades"
            color="black"
        }
        if (isNaN(valor)) {
            if (valor=="A") {
                valor=1
            }else if (valor=="J") {
                valor=11
            }else if (valor=="Q") {
                valor=12
            }else if (valor=="K") {
                valor=13
            }
        }
        console.log(`Carta: ${item}\nValor: ${valor} de ${suit}\n`) //esto es lo que necesita el retardo

}    


}

sacarCartasRetardo(500)// medio segundo

//separa desde la posicion cero hasta longitud -1

//todo preguntar BORJA, si veremos JSON.stringify y JSON.parse


