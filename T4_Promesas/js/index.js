/* setTimeout(() => {
    setTimeout
}, 2000);

setInterval(() => {
    
}, 2200); */
//CREAR PROMESA PROPIA
/* let promesa = new Promise(resolve, reject, ()=>{
    //da fallo porque resolve y reject tienen que ser function
    setTimeout(() => {
        console.log("Ejec.Postergada");
        
    }, 200);
}) */

//fetch son promesas ya hechas, necesitan su then para correcta y catch incorrecta
fetch("https://dummyjson.com/products")
.then((response)=>{
    //console.log(`correcta ${response}`);
    let json = response.json()
    console.log(response);
    
})
.catch(()=>{
    console.log("incorrecta");
    
})