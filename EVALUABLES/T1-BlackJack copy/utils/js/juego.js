let blackJack = new BlackJack()


function iniciarJuego(){
    let turnoPlayer=false//cambia a true al acabar de jugar la banca
    let turnoBanca= false//cambia a true al acabar de actuar el blacJack
    let finPartida= false// cambia true cuando boton plantarse
    let nombreIntroducido = false


    banca.crearBaraja()
    banca.barajearMazo()
    


    jugarBanca()
}
function jugarBanca(){
    banca.sacarCartasBanca();  // Este método debería actualizar la baraja internamente.
    console.log("Baraja después de sacar cartas Banca:");
    

    jugarJugador()
}

function jugarJugador(){
    
    player.sacarCartasManual()
}
//iniciarJuego()



//todo JUEGO SIN FUNCIONES ^^

/*  JUEGO SIN FUNCIONES

let turnoPlayer=false//cambia a true al acabar de jugar la banca
let turnoBanca= false//cambia a true al acabar de actuar el blacJack
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


    
blackJack.resultados()//llamarlo directamente desde las clases, en el else de banca o al final de jugador
 */
