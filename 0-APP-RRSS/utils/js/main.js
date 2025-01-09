//todo pintar los mensajes en el lado derecho

class Tuit {
    constructor(titular,mensaje) {
        this.titular=titular
        this.mensaje=mensaje
    }
}

let titulo= document.querySelector("#titular")
let mensaje= document.querySelector("#mensaje")
let btnPublicar= document.querySelector("#publicar")
let contador = document.querySelector("#contador")

let divPublicaciones= document.querySelector("#publicaciones")
let filter = document.querySelector("#filtro")

let arrayPublicacion = []

btnPublicar.addEventListener("click", (e)=>{
    if (titulo.value != "" && mensaje.value != "") {
        agregarMensaje(titulo.value, mensaje.value)
        clearInputs()
//todo
        
    }else{
        alert("Falta algun campo")
    } 
    
})

mensaje.addEventListener("input", ()=>{
contador.textContent =125 - mensaje.value.length
})

filter.addEventListener("change", (e)=>{
    console.log(arrayPublicacion);
    
   // filtrar(filter.value)
   if (filter.value != "TODO") {
        
    let arrayFiltrado=[]
    
    arrayFiltrado=arrayPublicacion.filter(element => {
        return element.titular==filter.value
    });
       //todo console.log(arrayFiltrado);
}else{
    arrayFiltrado=arrayPublicacion
}
})

function agregarMensaje(tit, mens){
    
    

    let publicacion = document.createElement("div")
    publicacion.className="publicacion"

    let titular = document.createElement("h5")
    titular.innerHTML=tit;

    let mensaje = document.createElement("p")
    mensaje.innerHTML= mens

    publicacion.append(titular)
    publicacion.append(mensaje)
    divPublicaciones.append(publicacion)

    let tuit = new Tuit(tit, mens)
        arrayPublicacion.push(tuit)

}
function clearInputs(){
    titulo.value=""
    mensaje.value=""
    contador.textContent=125
}

function filtrar (opcion){
    if (opcion != "TODO") {
        
        let arrayFiltrado=[]
        
        arrayFiltrado=arrayPublicacion.filter(element => {
            
            return element.titular==opcion
        });
            console.log(arrayFiltrado);
    }else{
        arrayFiltrado=arrayPublicacion
    }
    
}