/* 3. Tablero de ajedrez
17.50

Escribe un programa que cree un string que represente un tablero de 8 × 8, 
usando caracteres de nueva línea para separar las líneas. En cada posición 
del tabledo hay un espacio o un carácter "#". Los caracteres deberían de 
formar un tablero de ajedrez.

```
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # # 
 */
let filas =8
let columnas=8
let tablero=""

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        if (i%2===0 && j%2===0 || i%2!==0 && j%2!==0) {
            tablero += "##"
        }else{
            tablero +="  "
        }
        
    }
    tablero +="\n"
}
console.log(tablero)