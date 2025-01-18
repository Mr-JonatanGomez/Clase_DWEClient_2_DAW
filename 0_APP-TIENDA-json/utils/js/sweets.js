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

function alertComprarcarrito(carrito, precio){
    Swal.fire({
        title: `Do you want to complete your purchase for ${precio}€ ?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "confirm purchase",
        denyButtonText: `No, I want to continue buying`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Purchase finished, enjoy it", "", "success");
          carrito=[]
        } else if (result.isDenied) {
          Swal.fire("Purchase not complete", "", "info");
        }
      });
}