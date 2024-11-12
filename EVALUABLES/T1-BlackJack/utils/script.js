//const _ = require('underscore');//para barajar con _.shuffle(baraja)

function createCards(suit) {
  let numeration = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ]
  for (let item of numeration) {
    deck.push(item + suit)
  }
}

function disorderCards(deck) {
  disorderDeck = _.shuffle(deck)
  //ponemos la baraja primero para que la saque siempre antes que la primera carta
  disorderDeck.unshift("0B")
}

function croupierPlay(disorderDeck) {
  const datosCroupContainer = document.querySelector("#puntosCroupier")
  let ptCroupier = document.createElement("span")
  
  for (let i = 0; i < disorderDeck.length; i++) {
    setTimeout(() => {
      if (croupierPoints >= 17) {
        if (croupierPoints > 21) {
          console.log("El croupier ha perdido")
        }
        console.log("El crupier ha alcanzado el limite para parar.")
        return // Detenemos la ejecución si los puntos del crupier están en el rango deseado
      }

      let actualCard = disorderDeck[i]
      let valor = actualCard.substring(0, actualCard.length - 1)
      let suit = actualCard.charAt(actualCard.length - 1)

      // seleccionamos contenedor donde colocar los div / cartas creados
      const tapeteCroupContainer = document.querySelector("#tapeteCroup")

      // Crear la imagen
      let image = document.createElement("img")
      image.src = `./utils/img/cards/${actualCard}.png`
      image.style.width = "90px"

      // Agregar la imagen directamente al contenedor
      tapeteCroupContainer.appendChild(image)

      

      //sacar valor de la carta (si lo hago por objeto esto sobra)
      if (isNaN(valor)) {
        if (valor == "A") {
          valor = 1
        } else if (valor == "J" || valor == "Q" || valor == "K") {
          valor = 11
        }
      }

      croupierPoints += Number(valor)
      console.log(`Los puntos del croupier: ${croupierPoints}`)

      
      //CREAR PUNTOS
            
      
            ptCroupier.textContent = croupierPoints
            datosCroupContainer.appendChild(ptCroupier)
    }, i * 2500)
  }
}

//EMPIEZA EL JUEGO

//prueba imagen
/* let image = document.createElement("img")
image.src = "./utils/img/cards/AH.png"
document.querySelector("#cartaCr1").append(image)
image.style.width= "60px" */

//variables

let deck = []
let disorderDeck = []
let croupierPoints = 0
let playerPoints = 0

//creamos las cartas
createCards("T") //black trebol-clubs
createCards("D") //red diamante-diamonds
createCards("C") //red corazon-hearts
createCards("P") //black pica-spades

//barajeamos
disorderCards(deck)

croupierPlay(disorderDeck)

/* console.log(deck)
console.log(disorderDeck) */

//prueba6 primeras cartas a capon
/* for (let i = 0; i < 6; i++) {
    let actualCard = disorderDeck[i]
    let image = document.createElement("img")
     image.src = `./utils/img/cards/${actualCard}.png`
    document.querySelector(`#cartaCr${i+1}`).append(image)
    image.style.width= "60px"
    
} */
