//const _ = require('underscore');//para barajar con _.shuffle(baraja)

class Carta {
  constructor(numeracion, valor, palo, imagen) {
    this.numeracion = numeracion
    this.valor = valor
    this.palo = palo
    this.imagen = imagen
  }

  toString() {
    return `Carta: ${this.numeracion} de ${this.palo} \nValor: ${this.valor}\nPalo: ${this.palo}\nURL de Imagen: ${this.imagen}\n`
  }
}

//const baraja = []

class Banca {
  constructor() {
    this.baraja = []
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
        this.baraja.push(new Carta(numeracion, valoracion, palo, imagen))
      }
    }
  }
  mostrarBaraja() {
    this.baraja.forEach((item) => {
      console.log(item.toString())
    })
  }

  barajearMazo() {
    this.baraja = _.shuffle(this.baraja)
    this.baraja.unshift(
      new Carta("Baraja", 0, "Cartas", `./utils/img/cards/0B.png`)
    )
  }

  sacarCartasBanca() {
    //todo quizas meter por param que necesita indexBaraja=0 y en jugador coja el ultimo indexBanca
    //todo estoy modificando aqui, sobran y faltan cosas
    //zona donde van los puntos ubicados //puntajeBanca va a ir al span #puntosBanca
    const datosBancaContainer = document.querySelector("#puntosBanca") //id
    let puntajeBanca = document.createElement("span") //tippo
    datosBancaContainer.appendChild(puntajeBanca)

    let indexBaraja = 0
    let croupierPoints = 0

    let temporizador = setInterval(() => {
      if (croupierPoints < 17) {
        // seleccionamos contenedor donde colocar los div / cartas creados
        const tapeteBanca = document.querySelector("#tapeteBanca")

        // Crear la imagen
        let image = document.createElement("img")
        image.src = this.baraja[indexBaraja].imagen
        image.style.width = "90px"
        // Agregar la imagen directamente al contenedor
        tapeteBanca.appendChild(image)

        //PUNTOS
        croupierPoints += Number(this.baraja[indexBaraja].valor)
        console.log(`Los puntos del croupier: ${croupierPoints}`)
        //puntajeBanca.textContent = croupierPoints

        puntajeBanca.textContent = Number(croupierPoints)

        //sumamos 1 al index
        indexBaraja++
      } else {
        console.log("Banca con 17 o mas puntos")
        clearInterval(temporizador)
        //todo, Ver luego que no se repita la ultima del croup para ajustar logica del else
      }
    }, 3000)

    //logica antigua
    /*  */
  }
}

function sacarCroupier(baraja) {
  //todo estoy modificando aqui, sobran y faltan cosas
  //zona donde van los puntos ubicados
  const datosBancaContainer = document.querySelector("#puntosCroupier")
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
      const tapeteBanca = document.querySelector("#tapeteBanca")

      // Crear la imagen
      let image = document.createElement("img")
      image.src = `./utils/img/cards/${actualCard}.png`
      image.style.width = "90px"

      // Agregar la imagen directamente al contenedor
      tapeteBanca.appendChild(image)

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
      datosBancaContainer.appendChild(ptCroupier)
    }, i * 2500)
  }
}

//MAIN

let croupierPoints = 0
let playerPoints = 0
//let indiceActual = 1// para saltar la 0, que es la baraja

/* const baraja1 = new Baraja()

baraja1.crearBaraja()
barajearMazo(baraja1)
baraja1.mostrarBaraja(baraja1)

console.log(baraja1.cartas[2]) */

/* ya hecho con funcion

baraja1.cartas.forEach((carta) => {
  console.log(carta.toString())
}) */

/* function disorderCards(deck) {
  disorderDeck = _.shuffle(deck)
}

 */
