//todo JUEGO CON FUNCIONES
let turnoBanca = false //cambia a true al acabar de barajear el blacJack
let turnoPlayer = false //cambia a true al acabar de jugar la banca
let finPartida = false // cambia true cuando boton plantarse
//let nombreIntroducido = false

let blackJack = new BlackJack()

  
let names = prompt("Introduce tu nombre") //introName()//meter el prompt si SWEET no va
    if (names == "" || names === null) {
      names = "JUGADOR"
    }

/* function limpiarTablero(){
      const cartasJugador = document.querySelector("#tapetePlayer")
      const cartasBanca = document.querySelector("#tapeteBanca")
      const puntosJugador = document.querySelector("#puntosPlayer")
      const puntosBanca = document.querySelector("#puntosBanca")
  
      if (cartasJugador) cartasJugador.innerHTML = ""
      if (cartasBanca) cartasBanca.innerHTML = ""
      if (puntosJugador) puntosJugador.textContent = "0"
      if (puntosBanca) puntosBanca.textContent = "0"
    } */

function iniciarJuego() {

  /* limpiarTablero() */

  

  blackJack.crearBaraja()
  blackJack.barajearMazo()

  banca = new Banca(blackJack.baraja)
  player = new Player(names,blackJack.baraja,0,0,0,0)

  jugarBanca()
}
function jugarBanca() {
  banca.sacarCartasBanca()
  jugarJugador()
}

function jugarJugador() {
  player.sacarCartasManual()
  player.plantarse()
  player.jugarOtra()
}
window.onload = function(){

  iniciarJuego()
}

