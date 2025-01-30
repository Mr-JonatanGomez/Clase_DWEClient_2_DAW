//usar shuffle
let url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
let preguntas = []
cargarPreguntas()

let divResultado = document.querySelector("#resultado")
// pregunta ( pregunta[0], respuestas [1-4])



async function cargarPreguntas(){
    let respuesta= await fetch(url)
    let respuestaJson= await (respuesta.json())
    
//preguntas=respuestaJson.results

    respuestaJson.results.forEach((element, index) => {
        
    console.log(`pregunta num. ${index +1}`);
    console.log(element.question);
    let respuestas = element.incorrect_answers
    respuestas.push= element.correct_answer
    console.log(respuestas);
    
    pintarPregunta(element)

    });

    
}

function pintarPregunta(pregunta){
    //divPregunta.innerHTML
    let columna = document.createElement("div")
    columna.className="col-6 mb-4"

    let card = document.createElement("div")
    card.className= "card shadow"

    let cardbody = document.createElement("div")
    cardbody.className= "card-body"

    let preguntaTit = document.createElement("h6")
    preguntaTit.className = "pregunta text-primary"
    preguntaTit.innerHTML = pregunta

    cardbody.append(preguntaTit)
    card.append(cardbody)
    columna.append(card)


    divResultado.append(columna)
}
/* 
async function cargarProductosAsync(url) {
  
      let respuesta= await fetch(url)
      let json = await(respuesta.json())
      productos=json.products
      productosFiltrados=productos
    
      if (productos.length==0) {
        throw new Error("No se encontraron los productos")
      }
    
      productos.forEach(element => {
        pintarCartas(element)
      });
    } */