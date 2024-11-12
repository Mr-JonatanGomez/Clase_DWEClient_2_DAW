//const _ = require('underscore');//para barajar con _.shuffle(baraja)

class Carta {
  constructor(numeracion, valor, palo, imagen) {
    this.numeracion = numeracion
    this.valor = valor
    this.palo = palo
    this.imagen = imagen
  }

  toString() {
    return `${this.numeracion} de ${this.palo} \nValor: ${this.valor}\n Imagen: ${this.imagen}\n`
  }
}

//const baraja = []

class Baraja {
  constructor() {
    this.cartas = []
  }

  crearBaraja() {
    let numeraciones = [
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
    let palos = ["Corazones", "Diamantes", "Tréboles", "Picas"]
    let numeracion
    for (let palo of palos) {
      for (let valoracion of numeraciones) {
        numeracion = valoracion
        if (isNaN(valoracion)) {
          if (valoracion == "A") {
            valoracion = 1
          } else if (
            valoracion == "J" ||
            valoracion == "Q" ||
            valoracion == "K"
          ) {
            valoracion = 11
          } else {
            valoracion = Number(valoracion)
          }
        }
        const imagen = `./utils/img/cards/${numeracion}${palo.charAt(0)}.png` //sustituir actual
        this.cartas.push(new Carta(numeracion, valoracion, palo, imagen))
      }
    }
  }
}

function mostrarBaraja(baraja) {
  baraja.cartas.forEach((item) => {
    console.log(item.toString())
  })
}

function barajearMazo(baraja) {
  baraja.cartas = _.shuffle(baraja.cartas)
  baraja.cartas.unshift(
    new Carta("Baraja", 0, "Cartas", `./utils/img/cards/0B.png`)
  )
}
function sacarCroupier(baraja) {
  //todo estoy modificando aqui, sobran y faltan cosas
  //zona donde van los puntos ubicados
  const datosCroupContainer = document.querySelector("#puntosCroupier")
  let ptCroupier = document.createElement("span")

  for (let i = 0; i < baraja.size; i++) {
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



//MAIN

let croupierPoints = 0
let playerPoints = 0
//let indiceActual = 1// para saltar la 0, que es la baraja

const baraja1 = new Baraja()

baraja1.crearBaraja()
barajearMazo(baraja1)
mostrarBaraja(baraja1)

console.log(baraja1.cartas[2])

/* ya hecho con funcion

baraja1.cartas.forEach((carta) => {
  console.log(carta.toString())
}) */

/* function disorderCards(deck) {
  disorderDeck = _.shuffle(deck)
}

 */
