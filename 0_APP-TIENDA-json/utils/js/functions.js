let productos //usaremos este array para los filtrados
let filtroCat = document.querySelector("#filtroCat")
let precioMin = document.querySelector("#rangeMin")
let precioMax = document.querySelector("#rangeMax")
let btnReset = document.querySelector("#resetFiltro")


//BOTON PARA DESPLEGAR LA CESTA y FINALIZAR/VACIAR COMPRA
let btnCesta = document.querySelector("#btnCesta") 
let btnFinalizarCompra = document.querySelector("#btnFinalizarCompra")
let btnVaciarBasket = document.querySelector("#btnVaciarBasket")



let productosFiltrados= []// solo restablece con reset



let precioFinal = 0
let carrito= [] 


//divs
let divResultado = document.querySelector("#divResultado")
let divFiltros= document.querySelector("#filtros")
let divResultadoCarrito= document.querySelector("#divResultadoCarrito")
let divPrecioFinal= document.querySelector("#divPrecioFinal")


//todo boton vaciar varrito aun inactivo, hay que crear el boton en el HTML
//todo, esto servira tras finalizar compra o tras darle voluntariamente


cargarProductos()


//FILTROS 
{
/* filtroCat.addEventListener("change", (e)=>{
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
  
  productosFiltrados=productos.filter(element => {
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

}) */
}

// Filtrar por categoría
filtroCat.addEventListener("change", (e) => {
  divResultado.innerHTML = "";

  let valor = filtroCat.value

  /* LO QUE HACE 0||infinity ES ASIGNAR UN VALOR POR DEFECTO SI NO HAY NADA, ASI FUNCIONA AUNQUE SOLO RELLENES UN FILTRO */

  let precioMinimo = parseFloat(precioMin.value) || 0
  let precioMaximo = parseFloat(precioMax.value) || Infinity

  productosFiltrados = productos.filter((item) => {
    const cumpleCategoria = valor == 0 || item.category == valor
    const cumplePrecioMin = item.price >= precioMinimo
    const cumplePrecioMax = item.price <= precioMaximo

    return cumpleCategoria && cumplePrecioMin && cumplePrecioMax
  })

  productosFiltrados.forEach(item => {
    pintarCartas(item)
  })
})

// Filtrar por precio mínimo
precioMin.addEventListener("change", (e) => {
  divResultado.innerHTML = ""
  let precioMinimo = parseFloat(precioMin.value) || 0
  let valor = filtroCat.value;
  let precioMaximo = parseFloat(precioMax.value) || Infinity

  productosFiltrados = productos.filter((item) => {
    let cumpleCategoria = valor == 0 || item.category == valor
    let cumplePrecioMin = item.price >= precioMinimo
    let cumplePrecioMax = item.price <= precioMaximo

    return cumpleCategoria && cumplePrecioMin && cumplePrecioMax
  })

  productosFiltrados.forEach(item => {
    pintarCartas(item)
  })
})

// Filtrar por precio máximo
precioMax.addEventListener("change", (e) => {
  divResultado.innerHTML = ""

  let precioMaximo = parseFloat(precioMax.value) || Infinity 
  let valor = filtroCat.value
  let precioMinimo = parseFloat(precioMin.value) || 0 

  productosFiltrados = productos.filter((item) => {
    let cumpleCategoria = valor == 0 || item.category == valor
    let cumplePrecioMin = item.price >= precioMinimo
    let cumplePrecioMax = item.price <= precioMaximo

    return cumpleCategoria && cumplePrecioMin && cumplePrecioMax
  });

  productosFiltrados.forEach(item => {
    pintarCartas(item)
  })
});



//RESET
btnReset.addEventListener("click", (e) => {
  productosFiltrados = [...productos]//copia el array de productos original
  divResultado.innerHTML = ""
  filtroCat.value = "0"
  precioMin.value = ""
  precioMax.value = ""

  
  productosFiltrados.forEach(item => {
    pintarCartas(item)
  })
})

btnCesta.addEventListener("click", (e)=>{
  pintarProductosCesta(carrito)
})

btnFinalizarCompra.addEventListener("click", (e)=>{

if (carrito.length === 0 || precioFinal ===0) {
  alertCarritoVacio(carrito)
  //hasta aqui funciona BIEN al principio o si vacio con VACIAR
}else{

  alertConfirmarCompra(carrito, precioFinal)

}



})

btnVaciarBasket.addEventListener("click", (e)=>{
  if (carrito.length===0 || precioFinal === 0) {
    alertCarritoVacio(carrito)
  }else{

    alertVaciarCarro(carrito, precioFinal)
  }

  
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
      divResultadoCarrito.innerHTML=""
      pintarProductosCesta(carrito)
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

function agregarProdCarrito(producto, cantidad){
//verificar si el producto existe en carrito
let productoEnCarro= carrito.find((item)=>item.id ===producto.id)
if (productoEnCarro) {
  productoEnCarro.cantidad+= cantidad
  productoEnCarro.precioTotal = productoEnCarro.cantidad*productoEnCarro.precio_unidad
 
  carrito.forEach(element => {
    precioFinal+=element.precioTotal
  });
  //todo, actualizar precio final tambien cuando este implementado
  
  
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



}

function pintarProductosCesta(carrito){

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
    precio1.innerText=`${item.precio_unidad}€/ud`
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

  
});

  pintarPrecioFinal()
  /* pintarBotonFinalizarCompra() */
//AQUI FINALIZAR COMPRA


}


function pintarPrecioFinal() {
  // Reiniciar el precio final antes de recalcularlo
  precioFinal = 0;

  carrito.forEach((item) => {
    // Sumar el precio total de cada producto al precio final
    precioFinal += parseFloat(item.precioTotal)
  });

  // Pasarlo a dos decimales
  precioFinal = precioFinal.toFixed(2)

  // Mostrar el precio final en el div correspondiente
  divPrecioFinal.innerHTML = `<h4>Total Price: ${precioFinal}€</h4>`
}


function vaciarCarro(carrito){
  carrito = []
  divResultadoCarrito.innerHTML = ""
  pintarCarro()
}

