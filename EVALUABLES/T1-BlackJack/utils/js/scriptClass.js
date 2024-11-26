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
        } else if (this.puntos >= 17 && this.puntos <= 21) {
          clearInterval(tiempo)
          console.log(`La BANCA ha finalizado con ${this.puntos} puntos.`)
          turnoPlayer = true
          turnoBanca = false //finalizamos turnoBanca
        } else {
          clearInterval(tiempo)
          //alert("LA BANCA PIERDE")
          turnoPlayer = false
          turnoBanca = false
          finPartida = true

          blackJack.resultados()
        }
      }, 500)
    }
  }
}

class Player {
  constructor(
    nombre,
    baraja,
    puntos,
    partidasGanadas,
    partidasEmpate,
    partidasPerdidas
  ) {
    //todo this.nombre= probar este metod
    this.baraja = baraja // Se le pasa la misma baraja de la banca
    this.nombre=nombre
  
    

   /*  this.nombre = prompt("Introduce tu nombre") //introName()//meter el prompt si SWEET no va
    if (this.nombre == "" || this.nombre === null) {
      this.nombre = "JUGADOR"
    } */


    document.querySelector("#playerName").textContent = this.nombre
    this.puntos = puntos
    this.partidasGanadas = partidasGanadas
    this.partidasEmpate = partidasEmpate
    this.partidasPerdidas = partidasPerdidas
  }

  sacarCartasManual() {
    this.puntos = 0

    const tapetePlayer = document.querySelector("#tapetePlayer") //se usa con la function de abajo
    const puntosPlayerContainer = document.querySelector("#puntosPlayer")
    //establece el marcador en 0 antes del comienzo
    puntosPlayerContainer.textContent = this.puntos

    let oneMoreButton = document.querySelector("#oneMore")

    oneMoreButton.addEventListener("click", () => {
      if (finPartida) {
        alert(
          "La partida esta finalizada. NO PUEDES PEDIR CARTA, NI PLANTARTE, llamar mismo SWEETALERT"
        )
        return
      } else if (!turnoPlayer) {
        alert("Espera a que la banca finalice su jugada")
        return
      }

      const carta = this.baraja.shift() //sacamos eigualamos la carta eliminada

      if (carta && this.puntos < 22) {
        //si hay carta y puntos <22
        this.agregarImagen(carta)

        this.puntos += Number(carta.valor)

        puntosPlayerContainer.textContent = this.puntos
        console.log(`Puntos de ${this.nombre}: ${this.puntos}`)
      }
      if (this.puntos > 21) {
        setTimeout(() => {
          /*este SetTime, hace que una vez pasado de 21, muestre la carta, 
          sume puntos y finalice, si metia sin Set Time, o me dejaba sacar 
          otra mas una vez pasado, o me salia el fin de partida por haberme pasado
          antes de mostrar la carta*/
          //alert("TE PASASTE DE 21, HAS PERDIDO")
          //todo probar si te lleva a resultados
          turnoPlayer = false
          turnoBanca = false
          finPartida = true
          blackJack.resultados()
          console.log("NO HAY MAS CARTAS")
        }, 600)
      }
    })

    //todo QUITAR AQUI
    /* let stopButton = document.querySelector("#stop")
    stopButton.addEventListener("click", () => {
      if (finPartida) {
        alert(
          "La partida esta finalizada. NO PUEDES PEDIR CARTA, NI PLANTARTE, llamar mismo SWEETALERT"
        )
        //todo esto quizas no se necesite cuando te lleve a resultados directamente
      }
      finPartida = true
      console.log("FINAL DE PARTIDA")
      turnoPlayer = false
      blackJack.resultados()
    }) */
  }
  plantarse(){
    let stopButton = document.querySelector("#stop")
    stopButton.addEventListener("click", () => {
      if (finPartida) {
        alert(
          "La partida esta finalizada. NO PUEDES PEDIR CARTA, NI PLANTARTE, llamar mismo SWEETALERT"
        )
        //todo esto quizas no se necesite cuando te lleve a resultados directamente
      }
      finPartida = true
      console.log("FINAL DE PARTIDA")
      turnoPlayer = false
      blackJack.resultados()
    })
  
  }
  jugarOtra(){
    //todo ojo aqui
   /*  let partidaNueva=document.querySelector("#jugarMas")
    partidaNueva.addEventListener("click",()=>{
      if (finPartida) {
        Banca.puntos=0
        Player.puntos=0
        BlackJack.limpiarTablero()
        iniciarJuego()
      }else{
        alert("No puedes iniciar una partida, sin haber finalizado la actual")
      }
    }) */

      let partidaNueva = document.querySelector("#jugarMas")
      partidaNueva.addEventListener("click", () => {
          if (finPartida) {
              // Reiniciar variables globales
              turnoBanca = false
              turnoPlayer = false
              finPartida = false
              
              // Limpiar puntos y tablero
              this.puntos = 0
              Banca.puntos = 0
              Player.puntos = 0
  
             
  
              // Crear una nueva baraja y empezar el juego
              blackJack = new BlackJack() // Reiniciar la instancia
              iniciarJuego()
          } else {
              alert("No puedes iniciar una partida sin haber finalizado la actual")
          }
      })
  }
 
  //todo sacar aqui el boton plantarse, y el de partida nueva crearlo

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
    if (finPartida) {
      if (banca.puntos > 21) {
        alert("El ganador fue JUGADOR.RESULTADOS")

        console.log("GANA JUGADOR")
        /* const victoriasJ = document.querySelector("#winPlayer")
        Player.partidasGanadas+=1
        victoriasJ.textContent = Player.partidasGanadas */
        // todo soluccionar stat y nombres aqui
      } else if (player.puntos > 21) {
        alert("El ganador fue BANCA.RESULTADOS")
        console.log("GANA BANCA")
      } else if (banca.puntos > player.puntos) {
        alert("El ganador fue BANCA")
        console.log("GANA BANCA")
      } else if (player.puntos > banca.puntos && player.puntos <= 21) {
        alert("El ganador fue JUGADOR.RESULTADOS")
        console.log("GANA JUGADOR")
      } else {
        alert("Empate a puntos.RESULTADOS")
      }
    }
  }

 
}
