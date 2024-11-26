/* Vamos a trabajar con Bootstrap y el Layout de FILAS-COLUMNAS*/

/* las columnas , se dividen ellas solas si hay 2, al 50%, 3 al 33%...

la suma debe dar 12, lo que hace es repartir  12 entre las columnas, 
si tu le indicas a una 8, las otras 2ocupan 2 cada una */

/* ACCESO A NODOS
1- por su tag, button, div, li      --> de modo generalista
2- por su clase: .class             --> generalista
3- por su id: #id                   --> unico

se puede acceder con:
    getElementById("id_buscar")
    getElementByClass("class_buscar")
    getElementByTagName("tag_buscar")

    uno solo si es getElement, o multiples si es getElements
    devuelve HTMLElement o HTMLCollection


MEJOR USAR document.querySelector
    document.querySelector("tag")
    document.querySelector("#idQueSea")
    document.querySelector(".classQueSea")
    document.querySelectorAll(".classQueSea")

    un mismo metodo para todo, y si queremos plural seria querySelectorAll 
    que duevuelve lista de nodos

    ejemplo tag: 
        document.querySelector("div.container ul#lista-elementos li.seleccionado")

        busca en los tag div, los que tengan clase container, y 
        dentro de ella que tenga el tag ul que tenga dentro el 
        identificador lista-elementos y que dentro tenga un li con clase seleccionado

    ejemplo de type
        document.querySelector("div.container form input[type=radio]::selected")

        dame aquells input de tipo radio dentro de container-form que esten SELECCIONADOS

*/

let botonGeneral= document.querySelector("button")
console.log(botonGeneral);//encuentra el primero solo, si queremos todos All

let botonesGenerales= document.querySelectorAll("button")
console.log(botonesGenerales);//encuentra todos

//le damos id a los botones y buscamos uno concreto

let botonEliminar = document.querySelector("#btn-delete")
console.log(botonEliminar);

botonEliminar.textContent = "Investigar" //cambia el texto del boton
botonEliminar.className = "btn btn-warning" //cambia la class

botonEliminar.textContent = "Eliminar" //cambia el texto del boton al original
botonEliminar.className = "btn btn-danger" //cambia la class a la original

// Hacer funcionar al boton


let botonAnalizar = document.querySelector("#btn-analizar")

//botonEliminar.addEventListener("click",(event)=>{"Lo que quiero que pase"})click, focus, mouse...
botonAnalizar.addEventListener("click",(event)=>{
    let nodosListGroup=document.querySelectorAll("li")
    nodosListGroup.forEach(item => {
        item.className= "list-group-item list-group-item-action"// antes solo asi, list-group-item
        //tras cambio de clase de cada elemento, ahora se ponen gris al posarte despues de clicar en analizar

        console.log(item.textContent);
        
    })

}) 

/* let botonAdd = document.querySelector("#btn-add")
botonAdd.addEventListener("click",(event)=>{
    // ul.list-group li.list-group-item #elemento5
    let lista = document.querySelector("ul.list-group")
    //lista.innerHTML = "<li>Nodo Añadido(modifica html)</li>"  //esto elimina los 4 elementos que tenemos y pone exactamente lo qye ponga,ps
    lista.innerHTML += "<li>Nodo Añadido(modifica html)</li>"  //esto añade los 4 elementos que tenemos y pone exactamente lo qye ponga,ps

}) */

let contador = 0
let parrafoCont =document.querySelector("#contador")
let inputNombre = document.querySelector("#inputNombre")


let botonAdd = document.querySelector("#btn-add")
botonAdd.addEventListener("click",(event)=>{
   
    let nombre = inputNombre.value //cogemos el valor el input, para poder añardirlo a la lista
    let lista = document.querySelector("ul.list-group")
   
    
    if(!nombre ==""){ // o if(nombre.length == 0){ 
        
        lista.innerHTML += `<li class="list-group-item">Nombre ${nombre}</li>` 
         //esto añade a los 4 elementos que tenemos y pone exactamente lo qye ponga,ps
         contador++ //cada vez que añadimos un nodo, sumaos contador
         parrafoCont.textContent = contador
     }else{
        alert("No has introducido nombre")
     }
     inputNombre.value = "" //tras añadir, se queda en vacio para añadir uno nuevpo
})

// todo lo ideal es meter todas las variables juntas arriba

