function alertProductosNoCargados() {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "Products were not loaded",
        showConfirmButton: false,
        timer: 5000
    })
}

function alertProductosCargados() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "products loaded successfully",
        showConfirmButton: false,
        timer: 1500
    })
}

function alertCantidadIlegal(parametro) {
    if (isNaN(parametro)) {
        
        Swal.fire({
            position: "center",
            icon: "error",
            title: "You must choose quantity to add to basket",
            showConfirmButton: false,
            timer: 5000
        })
    }
}

function alertConfirmarCompra(carrito, precioFinal){
    Swal.fire({
        title: `Do you want to complete your purchase for ${precioFinal}€ ?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm purchase",
        denyButtonText: `No, continue shopping`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        
            carrito.length=0
            precioFinal=0
            divResultadoCarrito.innerHTML=""
            pintarPrecioFinal()
            
            Swal.fire("Purchase finished, enjoy it", "", "success");

        } else if (result.isDenied) {
          Swal.fire("Purchase not complete", "", "info");
        }
      });
}

function alertCarritoVacio(carrito) {
    if (carrito.length == 0) {
        
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Your basket is empty",
            showConfirmButton: false,
            timer: 2500
        })
    }
}

function alertVaciarCarro(carrito, precioFinal){
    Swal.fire({
        title: `Are you sure you want to empty your basket?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "yes, empty my basket",
        denyButtonText: `No, I want to continue buying`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("You have succcesfully empty your basket", "", "success");
            carrito.length=0
            precioFinal=0
            divResultadoCarrito.innerHTML=""
            pintarPrecioFinal()
        } else if (result.isDenied) {
          Swal.fire("Your basket has not been emptied", "", "info");
        }
      });
}