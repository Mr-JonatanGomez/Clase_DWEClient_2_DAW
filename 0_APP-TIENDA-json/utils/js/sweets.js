function alertProductosNoCargados() {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "No se han cargado los productos",
        showConfirmButton: false,
        timer: 50000
    })
}

function alertProductosCargados() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Products correctamente",
        showConfirmButton: false,
        timer: 1500
    })
}