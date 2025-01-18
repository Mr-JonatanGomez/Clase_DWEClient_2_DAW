let productos //usaremos este array para los filtrados
let filtroCat = document.querySelector("#filtroCat")
let precioMin = document.querySelector("#rangeMin")
let precioMax = document.querySelector("#rangeMax")
let btnReset = document.querySelector("#resetFiltro")


let btnCesta = document.querySelector("#btnCesta") 


let productosFiltrados= []// solo restablece con reset




let carrito= [] 


//divs
let divResultado = document.querySelector("#divResultado")
let divFiltros= document.querySelector("#filtros")
let divResultadoCarrito= document.querySelector("#divResultadoCarrito")

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

    precioMin.value=""
    precioMax.value=""
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

btnCesta.addEventListener("click", (e)=>{
  pintarProductosCesta(carrito)
})





//FUNCTIONS

function pintarCartas(item) {
  let column = document.createElement("div")
  column.className = "col card border-1"

  let carta = document.createElement("div")
  carta.className = "card border-0"

  let divImagen = document.createElement("div")
  divImagen.className = "card border-0"

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
  cardText.className = "card-text"
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
  btnAddCarrito.setAttribute("data-id", item.id); // Asociar el botón con el id del producto

  divBtnCarro.append(btnAddCarrito)

  let cantidad = document.createElement("input")
  cantidad.placeholder="Qty."
  cantidad.className="cantidad"
  cantidad.id ="cantidad"
  cantidad.type="Number"
  cantidad.min=0
  cantidad.max=30

  divBtnCarro.append(cantidad)

  //AÑADIR TODO

  carta.append(divImagen)
  carta.append(cardBody)
  column.append(carta)
  divResultado.append(column)

  //todo FUNCIONALIDAD DEL BOTON ADDCARRITO, limpiar cantidad tras agregar
  btnAddCarrito.addEventListener("click",(e)=>{


    let cantidadElegida= parseInt(cantidad.value)

    if (cantidadElegida>0) {
      agregarProdCarrito(item,cantidadElegida)
      //todo alert de agregado correctamente
      cantidad.value=""
      cantidad.placeholder="Qty."
    }else{
      alertCantidadIlegal(cantidadElegida)
    }
    
    })

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

//todo de momento solo agregado al ARRAY

function agregarProdCarrito(producto, cantidad){
//verificar si el producto existe en carrito
let productoEnCarro= carrito.find((item)=>item.id ===producto.id)

if (productoEnCarro) {
  productoEnCarro.cantidad+= cantidad
  productoEnCarro.precioTotal = productoEnCarro.cantidad*productoEnCarro.precio_unidad
}else{
  //agregamos un objeto con la cantidad precio y demas
  carrito.push({
    id:producto.id,
    nombre:producto.title,
    precio_unidad:producto.price,
    cantidad:cantidad,
    precioTotal:parseFloat(cantidad*producto.price).toFixed(2),
    imagen:producto.images

  })
}
console.log(carrito);


}

function pintarProductosCesta(carrito){
  //todo aqui hacemos la carta
  divResultadoCarrito.innerHTML = "";
  carrito.forEach(item => {
  
  let row = document.createElement("div")
  row.className="row productoEnCarro"

  let col1 = document.createElement("div")
  col1.className="col-2 ap1 imgCesta"

    let imgP = document.createElement("img")
    imgP.className="div-img-cesta"
    col1.append(imgP)

    if (item.imagen.length > 2) {
      imgP.src = item.imagen[2]
      // imagen [0] en CK es muy alñargada y rompe estructura
      // imagen[1] en CK todavia algo rara
    } else {
      imgP.src = item.imagen[0]
    }

  let col15 = document.createElement("div")
  col15.className = "col-1 ap15 div-Qty"

    let qtyInBasket = document.createElement("h6")
    qtyInBasket.innerText=`x ${item.cantidad}`
    col15.append(qtyInBasket)

  let col2 = document.createElement("div")
  col2.className="col-5 ap2 div-titulo"

    let tituloCesta = document.createElement("h5")
    tituloCesta.innerText=item.nombre
    col2.append(tituloCesta)

  let col3 = document.createElement("div")
  col3.className="col-2 ap3 div-preUnid"

    let precio1 = document.createElement("h6")
    precio1.innerText=`${item.precio_unidad}€`
    col3.append(precio1)

  let col4 = document.createElement("div")
  col4.className="col-2 ap4 div-preSubt"

    let precio2 = document.createElement("h5")
    precio2.innerText=` ${item.precioTotal}€`
    col4.append(precio2)


  row.append(col1)
  row.append(col15)
  row.append(col2)
  row.append(col3)
  row.append(col4)

  divResultadoCarrito.append(row)

/* 
      <div class="col-2 ap1">IMG</div>
      <div class="col-4 ap2">PRODUCTO</div>
      <div class="col-1 ap3">precio/Ud</div>
      <div class="col-1 ap4">subtotal</div>
 */

 /*  carta.append(divImagen)
  carta.append(cardBody)
  column.append(carta)
  divResultado.append(column) */

});

//todo los APPENDS
//todo pintar linea final, con precio total, nº productos, etc

}

function pintarCarro(){
  carrito.forEach(element => {
    pintarProductosCesta(element)
  });
  //todo tras pintar carro, pintamos el precio total, cogiendo con foreach el precio subtotal de cada

}

