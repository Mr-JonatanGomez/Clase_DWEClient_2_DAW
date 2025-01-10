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
let arrayFiltrado=[]

btnPublicar.addEventListener("click", (e)=>{
   

    if (titulo.value != "" && mensaje.value != "") {
        let tuit = new Tuit(titulo.value, mensaje.value)

        pintarMensaje(tuit)
        arrayPublicacion.push(tuit)
        clearInputs()
//todo problema undefined al pintar en filter
        
    }else{
        alert("Falta algun campo")
    } 
    
})

mensaje.addEventListener("input", ()=>{
contador.textContent =125 - mensaje.value.length
})

filter.addEventListener("change", (e)=>{
    //console.log(`L37 arrayTotal al cambio ${arrayPublicacion}`);
    // filtrar(filter.value)
    divPublicaciones.innerHTML=""
    if (filter.value != "TODO") {
        
        arrayFiltrado=arrayPublicacion.filter(element => {
            return element.titular==filter.value
        });

        
        console.log(`L37 arrayFiltrado al cambio ${arrayFiltrado}`);
       //todo console.log(arrayFiltrado);
    }else{
        divPublicaciones.innerHTML=""
        arrayFiltrado=arrayPublicacion
    }
    arrayFiltrado.forEach(element => {
        
        pintarMensaje(element.titular, element.mensaje)
    });
})


function pintarMensaje(tuit){
    
    //todo cambiar el parametro por tuit, y de hay que coja tuit.titular, tuit.mensaje

    let publicacion = document.createElement("div")
    publicacion.className="publicacion"

    let titular = document.createElement("h5")
    titular.innerHTML=tuit.titular

    let mensaje = document.createElement("p")
    mensaje.innerHTML= tuit.mensaje

    publicacion.append(titular)
    publicacion.append(mensaje)
    divPublicaciones.append(publicacion)

        //todo problema AQUI
/*         let tuit = new Tuit(tit, mens)
        arrayPublicacion.push(tuit) */
console.log(`array tras añadir mensaje l72 ${arrayPublicacion}`);

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
            console.log(`Array Filtrado L90 ${arrayFiltrado}`);
    }else{
        arrayFiltrado=arrayPublicacion
    }
    
}