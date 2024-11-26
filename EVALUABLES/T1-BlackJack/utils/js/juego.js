//todo JUEGO CON FUNCIONES
let turnoBanca = false //cambia a true al acabar de barajear el blacJack
let turnoPlayer = false //cambia a true al acabar de jugar la banca
let finPartida = false // cambia true cuando boton plantarse


let blackJack = new BlackJack()

  
let names = prompt("Introduce tu nombre")
    if (names == "" || names === null) {
      names = "JUGADOR"
    }

function limpiarTablero() {
      document.querySelector("#tapetePlayer").innerHTML = "";
      document.querySelector("#tapeteBanca").innerHTML = "";
      document.querySelector("#puntosPlayer").textContent = "0";
      document.querySelector("#puntosBanca").textContent = "0";

      // ESTA PARTE ES CHAT...porque me sacaba 2 cada vez que repetia partida
    const oneMoreButton = document.querySelector("#oneMore");
    const stopButton = document.querySelector("#stop");
    const partidaNueva = document.querySelector("#jugarMas");
    oneMoreButton.replaceWith(oneMoreButton.cloneNode(true));
    stopButton.replaceWith(stopButton.cloneNode(true));
    partidaNueva.replaceWith(partidaNueva.cloneNode(true));
  }
function iniciarJuego() {

  limpiarTablero()
  blackJack.crearBaraja()
  blackJack.barajearMazo()

  banca = new Banca(blackJack.baraja)
  player = new Player(names,blackJack.baraja)

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

