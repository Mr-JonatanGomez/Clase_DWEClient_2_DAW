let atMadrid = new Equipo("Atletico de Madrid", 500)
let rMadrid = new Equipo("Real Madrid", 500)
let barcelona = new Equipo("FC Barcelona", 500)

let equipos = [atMadrid, rMadrid, barcelona]

let porterosLibres = [
  new Jugador("Jan Oblak", "portero", 40),
  new Jugador("Thibaut Courtois", "portero", 60),
  new Jugador("Manuel Neuer", "portero", 50),
  new Jugador("Gianluigi Donnarumma", "portero", 70),
  new Jugador("Ederson Moraes", "portero", 55)
]
let jugadoresLibres = [
  new Jugador("Virgil van Dijk", "defensa", 80),
  new Jugador("João Cancelo", "defensa", 50),
  new Jugador("Dani Carvajal", "defensa", 35),
  new Jugador("David Alaba", "defensa", 40),
  new Jugador("José María Giménez", "defensa", 45),
  new Jugador("Robin le Normand", "defensa", 30),
  new Jugador("Marc Cubarsi", "defensa", 20),
  new Jugador("Frenkie de Jong", "medio", 90),
  new Jugador("Luka Modric", "medio", 35),
  new Jugador("Toni Kroos", "medio", 40),
  new Jugador("Bruno Fernandes", "medio", 60),
  new Jugador("Kevin De Bruyne", "medio", 110),
  new Jugador("Jorginho", "medio", 45),
  new Jugador("Marc Casado", "medio", 30),
  new Jugador("Koke", "medio", 35),
  new Jugador("Edouard Camavinga", "medio", 35),
  new Jugador("Rodri Hernandez", "medio", 135),
  new Jugador("Rodrygo Goes", "delantero", 120),
  new Jugador("Vinicius Jr.", "delantero", 90),
  new Jugador("Kylian Mbappé", "delantero", 180),
  new Jugador("Erling Haaland", "delantero", 150),
  new Jugador("Alex Sorloth", "delantero", 40),
  new Jugador("Robert Lewandowski", "delantero", 85),
  new Jugador("Antoine Griezmann", "delantero", 60),
  new Jugador("Julián Álvarez", "delantero", 55),
  new Jugador("Lamine Yamal", "medio", 30),
  new Jugador("Nico Williams", "medio", 50)
]

function rellenarPlantillas() {
  for (let i = 0; i < equipos.length; i++) {
    //fichar portero
    let rand = Math.floor(Math.random() * porterosLibres.length)
    equipos[i].ficharJugador(porterosLibres[rand])
    porterosLibres.splice(rand,1)//elimina desde el numero rand...1 posicion OSEA A ESE JUGADOR
    
    //fichar jugadores
   while(equipos[i].plantilla.length<5 && jugadoresLibres.length >0) {
   
      let rand = Math.floor(Math.random() * jugadoresLibres.length)
      equipos[i].ficharJugador(jugadoresLibres[rand])
      jugadoresLibres.splice(rand,1)
   }
}
}

rellenarPlantillas()

for (const element of equipos) {
  element.mostrarDatosEquipo()
}



/* 
Comprobacion

for (const item of porterosLibres) {
  console.log("los libres"+item.nombre);
}
 */
