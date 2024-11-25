/* 


Realiza las siguientes operaciones con objetos definidos por clase
    - Crea una clase llamada equipo. dicha clase tendrá 
    las siguientes propiedades: nombre (de tipo string), 
    plantilla (de tipo array), presupuesto (tipo int)

    - Crea una clase llamada jugador. dicha clase tendrá 
    tendrá las siguientes características: nombre (de 
    tipo string), posición (de tipo string), valor (de 
    tipo int)
    
    - Crea una función que se llame ficharJugador dentro 
    de la clase equipo y admita por un objeto de tipo 
    jugador. La función agregará el jugador a la propiedad 
    plantilla del equipo
    
    - Crea una funciona que se llame listarPlantilla dentro 
    de la clase equipo, el cual muestra los datos de todos 
    sus jugadores.
    
    - En un archivo separado crea tres objetos llamados: 
    barsa, madrid, atleti y dale parámetros iniciales. 
    La plantilla de todos los equipos estará vacía.
    
    - Realiza 5 fichajes en cada uno de los equipos
    
    - Muestra por consola los 3 jugadores más caros de cada 
    uno de cada uno de los equipos que 
*/

class Equipo {
  constructor(nombre, presupuesto) {
      this.nombre = nombre,
      this.plantilla = [],
      this.presupuesto = presupuesto
      this.tactica = ""
      
  }

  ficharJugador(jugador) {
    if (this.presupuesto > jugador.valor) {
      this.plantilla.push(jugador)
      this.presupuesto -= jugador.valor
      console.log(
        `el ${this.nombre} ha fichado con exito a ${jugador.nombre} por ${jugador.valor} M€`
      )
      console.log(`Le queda un presupuesto de ${this.presupuesto} M€`)
    } else {
      console.log("No tienes presupuesto para este fichaje")
    }
  }

  listarPlantilla() {


    //ordenar portero-def-med-del
    this.plantilla.sort((a, b) => {
      const orden = {
        portero: 1,
        defensa: 2,
        medio: 3,
        delantero: 4
      }
      return orden[a.posicion] - orden[b.posicion]
    })

    for (const item of this.plantilla) {
      item.mostrarDatos()
    }
  }

  ordenarPrecio() {
    const top3precio = this.plantilla
      .sort((jug1, jug2) => jug2.valor - jug1.valor)
      .slice(0, 3)
    console.log(`Los 3 jugadores mas valiosos del ${this.nombre} son:`)

    for (const item of top3precio) {
      console.log(`${item.nombre} - ${item.valor}`)
    }
  }

  sacarTactica(){
    let port =0
    let def = 0
    let med = 0
    let del = 0
    
    for (const element of this.plantilla) {
      if (element.posicion=="portero") {
        port++
      }else if(element.posicion=="defensa"){
        def++
      }else if(element.posicion=="medio"){
        med++
      }else if(element.posicion=="delantero"){
        del++
      }
    }
    this.tactica =`${port}-${def}-${med}-${del}`
    console.log(`Tactica: ${this.tactica}`);
    
  }

  mostrarDatosEquipo(){
    console.log("CLUB:"+this.nombre);
    console.log("PPTO:"+this.presupuesto);
    console.log("JUGADORES:");
    this.listarPlantilla()
    this.sacarTactica()
    
    
  }
}

class Jugador {
  constructor(nombre, posicion, valor) {
    ;(this.nombre = nombre), (this.posicion = posicion), (this.valor = valor)
  }

  mostrarDatos() {
    console.log(`${this.nombre}, ${this.posicion}`)
  }

  
}

