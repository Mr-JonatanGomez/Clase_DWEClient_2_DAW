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
  constructor(
    baraja,
    puntos,
    partidasGanadas,
    partidasEmpate,
    partidasPerdidas
  ) {
    this.baraja = baraja
    this.puntos = puntos
    this.partidasGanadas = partidasGanadas
    this.partidasEmpate = partidasEmpate
    this.partidasPerdidas = partidasPerdidas
  }

  sacarCartasBanca() {
    if (turnoBanca) {
      const tapeteBanca = document.querySelector("#tapeteBanca")
      const puntosBancaContainer = document.querySelector("#puntosBanca")
      this.puntos = 0

      puntosBancaContainer.textContent = this.puntos


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
          console.log(`Puntos acumulados de BANCA: ${this.puntos}`)
        } else if(this.puntos>=17 && this.puntos<=21) {
          clearInterval(tiempo)
          console.log(`La BANCA ha finalizado con ${this.puntos} puntos.`)
          turnoPlayer = true
          turnoBanca = false //finalizamos turnoBanca
          
        } else{
          clearInterval(tiempo)
          alert("LA BANCA PIERDE")
          turnoPlayer= false
          turnoBanca=false
          finPartida=true
          
        }
      }, 500)
    }

  }
}

class Player {
  constructor(
    baraja,
    puntos,
    partidasGanadas,
    partidasEmpate,
    partidasPerdidas
  ) {
    this.baraja = baraja // Se le pasa la misma baraja de la banca
    this.nombre = prompt("Introduce tu nombre")
    if (this.nombre == "" || this.nombre === null) {
      this.nombre = "JUGADOR"
    }
    document.querySelector("#playerName").textContent = this.nombre
    this.puntos = puntos
    this.partidasGanadas = partidasGanadas
    this.partidasEmpate = partidasEmpate
    this.partidasPerdidas = partidasPerdidas
  }

  sacarCartasManual() {
  

    this.puntos = 0

    const tapetePlayer = document.querySelector("#tapetePlayer")//se usa con la function de abajo
    const puntosPlayerContainer = document.querySelector("#puntosPlayer")
   //establezco el 0 puntos al empezar
    puntosPlayerContainer.textContent = this.puntos

    let oneMoreButton = document.querySelector("#oneMore")

    oneMoreButton.addEventListener("click", () => {
      if (finPartida) {
        alert("La partida ha finalizado")
        return
      }else if(!turnoPlayer){
        alert("Espera a que la banca finalice su jugada")
        return
      }

      const carta = this.baraja.shift() //sacamos eigualamos la carta eliminada

      if (carta && this.puntos < 22) {
        //si hay carta y puntos <22
        this.agregarImagen(carta)

        this.puntos += Number(carta.valor)
        cartasSacadas++

        puntosPlayerContainer.textContent = this.puntos
        console.log(`Puntos de ${this.nombre}: ${this.puntos}`)
      } else {
       
          alert("TE PASASTE DE 21, HAS PERDIDO")
          turnoPlayer= false
          turnoBanca=false
          finPartida=true
        console.log("NO HAY MAS CARTAS")
      }
    })

    let stopButton = document.querySelector("#stop")
    stopButton.addEventListener("click", () => {
      finPartida = true
      console.log("FINAL DE PARTIDA")
      alert("FIN")
      turnoPlayer = false
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

    //activarTurnoBanca para que pueda jugar
    turnoBanca = true
  }
//todo implementar ganadores y stats
  resultados() {
    if (banca.puntos > 21) {
      alert("El ganador fue JUGADOR")
      console.log("GANA JUGADOR")
    }
  }
}
