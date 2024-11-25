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

iniciarJuego()

//todo JUEGO SIN FUNCIONES ^^
/* 
 //JUEGO SIN FUNCIONES
let blackJack = new BlackJack()

let turnoBanca= false//cambia a true al acabar de barajear el blacJack
let turnoPlayer=false//cambia a true al acabar de jugar la banca
let finPartida= false// cambia true cuando boton plantarse
let nombreIntroducido = false

//let nombreJugador=introName()

blackJack.crearBaraja()
blackJack.mostrarBaraja()
blackJack.barajearMazo()
console.log("MAZO TRAS BARAJAR");
blackJack.mostrarBaraja()

let banca = new Banca(blackJack.baraja)
let player = new Player(blackJack.baraja,)

banca.sacarCartasBanca()

player.sacarCartasManual()


    
blackJack.resultados()//llamarlo directamente desde las clases, en el else de banca o al final de jugador */
