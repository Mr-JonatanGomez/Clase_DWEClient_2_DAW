let url = "https://dummyjson.com/products"

fetch(url)

//1. lanza peticion fetch al server
//2. con then analizo respuesta
//3. dentro de ese then lo convertimos a json
//4. en otro then analizo la respuesta de la traduccion
//5. trato la respuesta

/* AHORA LO HAREMOS CON AWAIT (indica que la funcion donde esta aplicada es una promesa y 
 no hay que usar el then para la respuesta) */

 /* ASYNC indica a aquella funcion donde se aplica el await que debe ser asyuncrono */


 async function obtenerProductos(url){
    let respuesta = await fetch(url)
    let json = await respuesta.json()
    console.log(json.products);
    
}

obtenerProductos(url)