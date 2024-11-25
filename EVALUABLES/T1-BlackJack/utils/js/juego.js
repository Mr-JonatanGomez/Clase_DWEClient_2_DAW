//todo JUEGO CON FUNCIONES
let turnoBanca = false //cambia a true al acabar de barajear el blacJack
let turnoPlayer = false //cambia a true al acabar de jugar la banca
let finPartida = false // cambia true cuando boton plantarse
//let nombreIntroducido = false

let blackJack = new BlackJack()

function iniciarJuego() {

  blackJack.crearBaraja()
  blackJack.barajearMazo()

  banca = new Banca(blackJack.baraja)
  player = new Player(blackJack.baraja,0,0,0,0)

  jugarBanca()
}
function jugarBanca() {
  banca.sacarCartasBanca()
  jugarJugador()
}

function jugarJugador() {
  player.sacarCartasManual()
}
window.onload = function(){

  iniciarJuego()
}

