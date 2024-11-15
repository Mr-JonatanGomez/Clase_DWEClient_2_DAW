//const _ = require('underscore');//para barajar con _.shuffle(baraja)

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

//const baraja = []

class Banca {
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
  }

  sacarCartasBanca() {
    
    //zona donde van los puntos ubicados //puntajeBanca va a ir al div #puntosBanca
    const datosBancaContainer = document.querySelector("#puntosBanca") //id
    let puntajeBanca = document.createElement("div") //tippo
    datosBancaContainer.appendChild(puntajeBanca)

    
    let croupierPoints = 0

    let temporizador = setInterval(() => {
      if (croupierPoints < 17) {
        // seleccionamos contenedor donde colocar los div / cartas creados
        const tapeteBanca = document.querySelector("#tapeteBanca")

        // Crear la imagen
        let image = document.createElement("img")
        image.src = this.baraja[0].imagen
        image.style.width = "90px"
        // Agregar la imagen directamente al contenedor
        tapeteBanca.appendChild(image)

        //PUNTOS
        croupierPoints += Number(this.baraja[0].valor)
        console.log(`Los puntos del croupier: ${croupierPoints}`)
        //puntajeBanca.textContent = croupierPoints

        puntajeBanca.textContent = Number(croupierPoints)

        //sumamos 1 al index
        
        this.baraja.shift()
      } else {
        console.log("Banca con 17 o mas puntos")
        clearInterval(temporizador)
        //todo, Ver luego que no se repita la ultima del croup para ajustar logica del else
      }
    }, 500)

    this.mostrarBaraja
  }
  sacarCartasBanca2() {
    //todo 
    //zona donde van los puntos ubicados //puntajeBanca va a ir al div #puntosBanca
    const datosBancaContainer = document.querySelector("#puntosBanca") //id
    let puntajeBanca = document.createElement("div") //tippo
    datosBancaContainer.appendChild(puntajeBanca)

    let indexBaraja = 0
    let croupierPoints = 0

    let temporizador = setInterval(() => {
      if (croupierPoints < 17) {
        // seleccionamos contenedor donde colocar los div / cartas creados
        const tapeteBanca = document.querySelector("#tapeteBanca")

        // Crear la imagen
        let image = document.createElement("img")
        image.src = this.baraja[indexBaraja].imagen
        image.style.width = "90px"
        // Agregar la imagen directamente al contenedor
        tapeteBanca.appendChild(image)

        //PUNTOS
        croupierPoints += Number(this.baraja[indexBaraja].valor)
        console.log(`Los puntos del croupier: ${croupierPoints}`)
        //puntajeBanca.textContent = croupierPoints

        puntajeBanca.textContent = Number(croupierPoints)

        //sumamos 1 al index
        indexBaraja++
      } else {
        console.log("Banca con 17 o mas puntos")
        clearInterval(temporizador)
        //todo, Ver luego que no se repita la ultima del croup para ajustar logica del else
      }
    }, 3000)

    //logica antigua
    /*  */
  }
}

class Player{
  //para poder pasarle la baraja
  constructor(baraja){
    this.baraja = baraja
    this.nombre = prompt("introduce tu nombre")
    document.querySelector("#playerName").textContent = this.nombre
    
  }

  sacarCartasPlayer(){
    
    console.log(this.baraja[0]);
    
  }
  }
/* 
  sacarCartasPlayer() {
    
    //zona donde van los puntos ubicados //puntajeBanca va a ir al div #puntosBanca
    const datosPlayerContainer = document.querySelector("#puntosPlayer") //id
    let puntajePlayer = document.createElement("div") //tippo
    datosPlayerContainer.appendChild(puntajePlayer)

    
    let jugadorPoints = 0

    let temporizador = setInterval(() => {
      if (jugadorPoints < 17) {
        // seleccionamos contenedor donde colocar los div / cartas creados
        const tapetePlayer = document.querySelector("#tapetePlayer")

        // Crear la imagen
        let image = document.createElement("img")
        //image.src = this.baraja[0].imagen
        image.style.width = "90px"
        // Agregar la imagen directamente al contenedor
        tapetePlayer.appendChild(image)

        //PUNTOS
        jugadorPoints += Number(this.baraja[0].valor)
        console.log(`Los puntos del croupier: ${jugadorPoints}`)
        //puntajeBanca.textContent = croupierPoints

        puntajePlayer.textContent = Number(jugadorPoints)

        //borramos de la baraja la carta
        
        this.baraja.shift()
      } else {
        console.log("Banca con 17 o mas puntos")
        clearInterval(temporizador)
        //todo, Ver luego que no se repita la ultima del croup para ajustar logica del else
      }
    }, 3000)

  
  }
    */
  /* CHAT
  class Player {
  constructor(baraja) {
    this.baraja = baraja; // Se le pasa la misma baraja de la banca
    this.nombre = prompt("Introduce tu nombre");
    document.querySelector("#playerName").textContent = this.nombre;
  }

  sacarCartasPlayer() {
    const tapetePlayer = document.querySelector("#tapetePlayer");
    const puntosPlayerContainer = document.querySelector("#puntosPlayer");

    let puntajePlayer = 0;
    let cartaIntervalo = setInterval(() => {
      if (puntajePlayer < 17 && this.baraja.length > 0) {
        const carta = this.baraja.shift();
        puntajePlayer += carta.valor;

        // Agregar carta visualmente
        let imagenCarta = document.createElement("img");
        imagenCarta.src = carta.imagen;
        imagenCarta.style.width = "90px";
        tapetePlayer.appendChild(imagenCarta);

        // Actualizar puntos
        puntosPlayerContainer.textContent = `Puntos: ${puntajePlayer}`;
        console.log(`Puntos de ${this.nombre}: ${puntajePlayer}`);
      } else {
        clearInterval(cartaIntervalo);
        console.log(`${this.nombre} ha finalizado con ${puntajePlayer} puntos.`);
      }
    }, 3000);
  }
}
   */
