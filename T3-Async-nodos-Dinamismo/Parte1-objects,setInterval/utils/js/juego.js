let baraja = []
let palos = ["C", "T", "R", "P"]
// 1C....10111213C,1T...10111213T
for (let index = 0; index < palos.length; index++) {
  // C T R P
  for (let i = 1; i <= 13; i++) {
    switch (i) {
      case 11:
        // JC.png
        baraja.push(new Carta("J" + palos[index]))
        break
      case 12:
        baraja.push(new Carta("Q" + palos[index]))
        break
      case 13:
        baraja.push(new Carta("K" + palos[index]))
        break
      default:
        baraja.push(new Carta(i + palos[index]))
        break
    }
  }
}
baraja = _.shuffle(baraja)

// baraja = [];

// empiezo a jugar -> la banca juega hasta que tenga una cuenta de 17 o mas

let puntosCroupier = 0
let index = 0

// setTimeout -> postergo la ejecucion de una accion
// setInterval -> ejecuta una accion cada X segundos

let intervalo = setInterval(() => {
  if (puntosCroupier < 17) {
    let cartaActual = baraja[index]
    index++
    puntosCroupier += cartaActual.valor
    console.log(cartaActual.valor)
    console.log(cartaActual.imagen)
  } else {
    //cuando tiene más de 17, cerramos intervalo
    clearInterval(intervalo)
    console.log(
      `ya tiene 17 o más, la banca finaliza su turno con ${puntosCroupier}`
    )
  }
}, 1200)

//mismo proceso para jugador
//banca +21, gana jugador
// si jugador se pasa, gana banca
//si ninguno se parseFloat, gana quien tiene + puntos
