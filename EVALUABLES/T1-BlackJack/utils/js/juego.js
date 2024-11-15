let banca = new Banca()
let player = new Player(banca.baraja)//le paso la misma baraja


banca.crearBaraja()
//banca.barajearMazo()
banca.mostrarBaraja()

//todo ya funciona esto ^^

// todo         modificar la logica.... 
// todo         crear baraja, mostrar y mezclar en el juego, fuera de la banca, la banca solo jugar

banca.sacarCartasBanca()// este borra del array, el mismo metodo acabado en 2 no

banca.mostrarBaraja()
player.sacarCartasPlayer()