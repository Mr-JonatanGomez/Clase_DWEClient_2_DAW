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

class Banca {
  constructor(baraja, puntos, partidasGanadas) {
    this.baraja = baraja
    this.puntos = puntos
    this.partidasGanadas = partidasGanadas
  }

  /* crearBaraja() {
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
  } */

  sacarCartasBanca() {
    if (turnoBanca) {
      const tapeteBanca = document.querySelector("#tapeteBanca")
      const puntosBancaContainer = document.querySelector("#puntosBanca")

      this.puntos = 0
      let tiempo = setInterval(() => {
        if (this.puntos < 17 && this.baraja.length > 0) {
          const carta = this.baraja.shift()
          this.puntos += Number(carta.valor) //si falla parsear Numero

          // Agregar carta visualmente
          let imagenCarta = document.createElement("img")
          imagenCarta.src = carta.imagen //damos al src su URL con el valor imagen del objeto
          imagenCarta.style.width = "90px"
          tapeteBanca.appendChild(imagenCarta)

          // Actualizar puntos
          puntosBancaContainer.textContent = this.puntos
          console.log(`Puntos de ${this.nombre}: ${this.puntos}`)
        } else {
          clearInterval(tiempo)
          console.log(`${this.nombre} ha finalizado con ${this.puntos} puntos.`)
          turnoPlayer = true
          turnoBanca = false //finalizamos turnoBanca
        }
      }, 500)
    }
  }
}

class Player {
  constructor(baraja, puntos, partidasGanadas) {
    this.baraja = baraja // Se le pasa la misma baraja de la banca
    this.nombre = prompt("Introduce tu nombre")
    if (this.nombre==""||this.nombre===null) {
      this.nombre="JUGADOR"
    }
    document.querySelector("#playerName").textContent = this.nombre
    this.puntos = puntos
    this.partidasGanadas = partidasGanadas
  }

  sacarCartasManual() {
    //COPIAMOS EL ARRAY DE BANCA

    this.puntos = 0
    let cartasSacadas= 0 // para la hora de plantarse

    const tapetePlayer = document.querySelector("#tapetePlayer")
    const puntosPlayerContainer = document.querySelector("#puntosPlayer")

    let oneMoreButton = document.querySelector("#oneMore")

    oneMoreButton.addEventListener("click", () => {
      if (!turnoPlayer) {
        alert("Espera a que la banca finalice su jugada")
        return
      }

      const carta = this.baraja.shift() //sacamos eigualamos la carta eliminada

      if (carta && puntajePlayer < 22) {
        //
        this.agregarImagen(carta)

        this.puntos += Number(carta.valor)
        cartasSacadas++

        puntosPlayerContainer.textContent = this.puntos
        console.log(`Puntos de ${this.nombre}: ${this.puntos}`)
      } else {
        console.log("NO HAY MAS CARTAS")
      }
    })
  }

  //funcion agregar carta
  agregarImagen(carta) {
    let imagenCarta = document.createElement("img")
    imagenCarta.src = carta.imagen
    imagenCarta.style.width = "90px"
    tapetePlayer.appendChild(imagenCarta)
  }
}
class BlackJack {
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

    //activarTurnoMaquina
    turnoBanca = true
  }
}
