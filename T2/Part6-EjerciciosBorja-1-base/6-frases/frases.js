/* 
6. Frases

Pedir al usuario que introduzca una frase por teclado. Tras meter la frase se ejecutará la siguiente funcionalidad:

- Si la frase tiene menos de 10 letras, se volverá a pedir nuevamente
- Si tiene más de 10 letras aparecerá una alerta con la siguiente información:

  - El dato introducido tiene:
  - X letras
  - X palabras
  - X frases
  
  */
 
  // Hola tio, que tal vas. Yo muy bien. (25 letras,8 palabras, 2 frases, 34 char)
let frase=""
let numLetras= 0

do {
    
    frase= prompt("Introduce una frase o varias, \nno seas pazguato y no metas !¡¿?@...etc, solo puntos y comas")
    
    let fraseSinEspacios= frase.replaceAll(" ","")
    let fraseSinComas = fraseSinEspacios.replaceAll(",", "")
    let fraseTotalSinEspeciales = fraseSinComas.replaceAll(".", "")
    
    let numFrases = frase.split(".").length
    
    numLetras = fraseTotalSinEspeciales.length
    let numCharTotal= frase.length
    let numPalabras = frase.split(" ").length
    
    if (numLetras<10) {
        alert("Tu frase tiene, menos de 10 letras, mete otra que tenga más")
    }else{
        alert(` La frase introducida tiene:\nTotal de caraácteres: ${numCharTotal}\nTotal letras: ${numLetras}\nTotal palabras: ${numPalabras}\nFrases totales: ${numFrases}`
        

        
        )
     }
     console.log(numCharTotal)
     console.log(numLetras)
     console.log(numPalabras)
     
     console.log(numFrases)
} while (numLetras<10);






