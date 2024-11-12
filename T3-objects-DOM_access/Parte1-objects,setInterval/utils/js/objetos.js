// fichero.java -> se tenia que llamar igual que la clase, en JS no es necesario


//en java
    //atributos ( prvate, public , protected)
    //constructor
    // metods
    //getter / setter
    // las privadas van con #


    /* 
    modo un poco extraño a mi modo de ver, es mas sencillo darle valor, palo e 
    imagen que una representacion de la carta por iniciales
    */ 
    class Carta {
        // atributo (private, public, protected)
        valor;
        imagen;
        constructor(representacion) {
          this.imagen = `./${representacion}.png`;
          this.valor = representacion.substring(0, representacion.length - 1);
          // KC -> 10
          // 9C -> 9
          if (this.valor == "J" || this.valor == "K" || this.valor == "Q") {
            this.valor = 10;
          } else {
            this.valor = Number(this.valor);
          }
        }
      }