let productos //usaremos este array para los filtrados
let filtroCat = document.querySelector("#filtroCat")
let precioMin = document.querySelector("#rangeMin")
let precioMax = document.querySelector("#rangeMax")
let btnReset = document.querySelector("#resetFiltro")

let productosFiltrados= []// solo restablece con reset

let carrito= [] 
//divs
let divResultado = document.querySelector("#divResultado")
let divFiltros= document.querySelector("#filtros")

cargarProductos()

{/* 
    <label for="filtroCat">Categoria</label><br>
    <select name="filtroCat" id="filtroCat">
        <option value="groceries">groceries</option>
    <option value="beauty">beauty</option>
    <option value="fragances">fragances</option>
    <option value="furniture">furniture</option>
    <option value="0">All</option>
    </select> 
                            
*/}



//todo terminado filtroCat, seguir con filtro precioMin
//FILTROS
filtroCat.addEventListener("change", (e)=>{
    divResultado.innerHTML=""


    let valor= filtroCat.value
    
    
    

    if (valor != 0) {
        productosFiltrados=productos.filter((item) => {
            return item.category==valor
        });    
    }else{
        productosFiltrados=productos
    }
    //console.log(productosFiltrados)
    productosFiltrados.forEach(item => {
        pintarCartas(item)
    })
    
})

precioMin.addEventListener("change", (e)=>{
  divResultado.innerHTML=""
  let precioMinimo = precioMin.value
  
  productosFiltrados=productosFiltrados.filter(element => {
    return element.price>=precioMinimo
  })
  productosFiltrados.filter(element => {
    pintarCartas(element)
  })

})

precioMax.addEventListener("change", (e)=>{
  divResultado.innerHTML=""
let precioMaximo = precioMax.value

productosFiltrados=productosFiltrados.filter(element => {
  return element.price <= precioMaximo  
});
    
productosFiltrados.forEach(element => {
  pintarCartas(element)
});

})
//RESET
btnReset.addEventListener("click",(e)=>{
  productosFiltrados= productos
  
  divResultado.innerHTML=""
  filtroCat.value="0"
  precioMin.value=""
  precioMax.value=""
  

  
  
  productosFiltrados.forEach(element => {
  pintarCartas(element)
  });
  
  
})





//FILTRADOS como foreach pero filter
/* .then((response2)=>{
 filtroCat= response2.filter((element) => element.category=="groceries");
 
 filtroCat.forEach(element =>console.log(`${element.title}   ${element.price}`))
}) */
//.then(alertProductosCargados)

//FUNCTIONS

function pintarCartas(item) {
  let column = document.createElement("div")
  column.className = "col card"

  let carta = document.createElement("div")
  carta.className = "card"

  let divImagen = document.createElement("div")
  divImagen.className = " card"

  let imagen = document.createElement("img")
  imagen.className = "card-img-top"
  divImagen.append(imagen)

  if (item.images.length > 2) {
    imagen.src = item.images[2]
    // imagen [0] en CK es muy alñargada y rompe estructura
    // imagen[1] en CK todavia algo rara
  } else {
    imagen.src = item.images[0]
  }

  let cardBody = document.createElement("div")
  cardBody.className = "card-body d-flex flex-column"

  let cardTitle = document.createElement("h5")
  cardTitle.className = "card-title"
  cardTitle.innerText = item.title
  cardBody.append(cardTitle)

  let cardText = document.createElement("p")
  cardText.className = "card-title"
  cardText.innerText = item.description
  cardBody.append(cardText)

  let ulList = document.createElement("ul")
  ulList.className = "list-group list-group-flush"
  cardBody.append(ulList)

  let li1 = document.createElement("li")
  li1.className = "list-group-item"
  li1.innerText = `Category: ${item.category}`
  ulList.append(li1)

  let li2 = document.createElement("li")
  li2.className = "list-group-item"
  li2.innerText = `Price: ${item.price}€`
  ulList.append(li2)

  let li3 = document.createElement("li")
  li3.className = "list-group-item"
  li3.innerText = `Discount: ${item.discountPercentage}%`
  ulList.append(li3)

  let divBtnCarro = document.createElement("div")
  divBtnCarro.className = "divBtnCarro"
  cardBody.append(divBtnCarro)

  let btnAddCarrito = document.createElement("button")
  btnAddCarrito.id = "btnAddCarrito"
  btnAddCarrito.className = "btn btn-primary w-50"
  btnAddCarrito.innerText = "Add basket"

  divBtnCarro.append(btnAddCarrito)

  //AÑADIR TODO

  carta.append(divImagen)
  carta.append(cardBody)
  column.append(carta)
  divResultado.append(column)

  /* column.append(carta)
    carta.append(imagen)
    cardBody.append(cardTitle)
    cardBody.append(cardText)
    cardBody.append(ulList)
    divResultado.append(column) */
}

function cargarProductos(){
  fetch("https://dummyjson.com/products")
  // para correcta
  //para pasarlo encadenando la promess necesitamos un return implicito o explicito
  .then((response) => response.json()) //convierte RESPUESTA A JSON

  .then((response1) => {
    //response1 lleva el return de la anterior promesa
    productos = response1.products

    // aqui copiamos el array, para que de inicio tenga todo
    productosFiltrados=productos

    if (productos.length==0) {
      //condicion para lanzar el error en el catch
      throw new Error("No se encontraron los productos")
    }


    //pintamos las cartas
    productos.forEach((element) => {
      pintarCartas(element)
    })

    
  })
  //para incorrectaa
  .catch((error)=>{
    console.error("No cargados lso productos",error.message)
    alertProductosNoCargados()
  }
    
  )
}
