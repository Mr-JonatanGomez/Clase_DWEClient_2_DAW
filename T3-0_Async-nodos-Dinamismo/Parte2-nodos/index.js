// necesito para hacer funcionar el boton (id)

//1 le seleccionamos
let boton= document.querySelector("#btn-pulsar")

//2 le decimos que escuche
    //primer param, el evento en este caso click
    //segundo param, LO QUE OCURRIRÁ AL HACER CLICK, por ejemplo funcion
boton.addEventListener("click", ()=>{
    console.log("lo que ejecuta")
 } )
