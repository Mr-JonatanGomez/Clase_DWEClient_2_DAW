let blackJack = new BlackJack()
//le paso la misma baraja

let turnoPlayer=false//cambia a true al acabar de jugar la banca
let turnoBanca= false//cambia a true al acabar de actuar el blacJack
let finPartida= false// cambia true cuando boton plantarse

blackJack.crearBaraja()
blackJack.mostrarBaraja()
blackJack.barajearMazo()
console.log("MAZO TRAS BARAJAR");
blackJack.mostrarBaraja()

let banca = new Banca(blackJack.baraja)
let player = new Player(blackJack.baraja)

banca.sacarCartasBanca()

player.sacarCartasManual()

if (finPartida) {
    
    blackJack.resultados()
}

//todo ya funciona esto ^^

// todo       PROBAR SIN FUNCIONES
/* banca.sacarCartasBanca()// este borra del array, el mismo metodo acabado en 2 no

banca.mostrarBaraja()
player.sacarCartasPlayer() */
/* 
function iniciarJuego(){
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
iniciarJuego()
 */