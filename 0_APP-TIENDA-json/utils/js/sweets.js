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