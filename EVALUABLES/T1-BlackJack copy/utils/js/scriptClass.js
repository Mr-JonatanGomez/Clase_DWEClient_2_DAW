class Carta {
  constructor(numeracion, valor, palo, imagen) {
      this.numeracion = numeracion;
      this.valor = valor;
      this.palo = palo;
      this.imagen = imagen;
  }

  toString() {
      return `Carta: ${this.numeracion} de ${this.palo}\nValor: ${this.valor}`;
  }
}

class Banca {
  constructor(baraja) {
      this.baraja = baraja;
      this.puntos = 0;
  }

  sacarCartasBanca() {
      if (turnoBanca) {
          const tapeteBanca = document.querySelector("#tapeteBanca");
          const puntosBancaContainer = document.querySelector("#puntosBanca");

          puntosBancaContainer.textContent = this.puntos;

          let tiempo = setInterval(() => {
              if (this.puntos < 17 && this.baraja.length > 0) {
                  const carta = this.baraja.shift();
                  this.puntos += Number(carta.valor);

                  // Agregar carta visualmente
                  let imagenCarta = document.createElement("img");
                  imagenCarta.src = carta.imagen;
                  imagenCarta.style.width = "90px";
                  tapeteBanca.appendChild(imagenCarta);

                  puntosBancaContainer.textContent = this.puntos;
                  console.log(`Puntos acumulados de BANCA: ${this.puntos}`);
              } else {
                  clearInterval(tiempo);
                  turnoPlayer = true;
                  turnoBanca = false;

                  if (this.puntos > 21) {
                      finPartida = true;
                      blackJack.resultados();
                  }
              }
          }, 500);
      }
  }
}

class Player {
  constructor(nombre, baraja) {
      this.nombre = nombre;
      this.baraja = baraja;
      this.puntos = 0;

      document.querySelector("#playerName").textContent = this.nombre;
  }

  sacarCartasManual() {
      const tapetePlayer = document.querySelector("#tapetePlayer");
      const puntosPlayerContainer = document.querySelector("#puntosPlayer");

      puntosPlayerContainer.textContent = this.puntos;

      const oneMoreButton = document.querySelector("#oneMore");
      oneMoreButton.addEventListener("click", () => {
          if (finPartida || !turnoPlayer) return;

          const carta = this.baraja.shift();
          if (carta && this.puntos < 22) {
              this.agregarImagen(carta, tapetePlayer);
              this.puntos += Number(carta.valor);

              puntosPlayerContainer.textContent = this.puntos;
              console.log(`Puntos de ${this.nombre}: ${this.puntos}`);
          }

          if (this.puntos > 21) {
              setTimeout(() => {
                  turnoPlayer = false;
                  finPartida = true;
                  blackJack.resultados();
              }, 600);
          }
      });
  }

  plantarse() {
      const stopButton = document.querySelector("#stop");
      stopButton.addEventListener("click", () => {
          if (finPartida) return;
          turnoPlayer = false;
          finPartida = true;
          blackJack.resultados();
      });
  }

  jugarOtra() {
      const partidaNueva = document.querySelector("#jugarMas");
      partidaNueva.addEventListener("click", () => {
          if (finPartida) {
              turnoBanca = turnoPlayer = finPartida = false;
              limpiarTablero();
              iniciarJuego();
          } else {
              alert("No puedes iniciar una partida sin haber finalizado la actual");
          }
      });
  }

  agregarImagen(carta, tapete) {
      const imagenCarta = document.createElement("img");
      imagenCarta.src = carta.imagen;
      imagenCarta.style.width = "90px";
      tapete.appendChild(imagenCarta);
  }
}

class BlackJack {
  constructor() {
      this.baraja = [];
  }

  crearBaraja() {
      const numeraciones = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];

      for (let palo of palos) {
          for (let valor of numeraciones) {
              const numeracion = valor;
              let valorNumerico = isNaN(valor) ? (valor === "A" ? 1 : 11) : Number(valor);
              const imagen = `./utils/img/cards/${numeracion}${palo.charAt(0)}.png`;
              this.baraja.push(new Carta(numeracion, valorNumerico, palo, imagen));
          }
      }
  }

  barajearMazo() {
      this.baraja = _.shuffle(this.baraja);
      this.baraja.unshift(new Carta("Baraja", 0, "Cartas", `./utils/img/cards/0B.png`));
      turnoBanca = true;
  }

  resultados() {
      if (finPartida) {
          if (banca.puntos > 21) {
              alert("El ganador fue JUGADOR");
          } else if (player.puntos > 21) {
              alert("El ganador fue BANCA");
          } else if (banca.puntos > player.puntos) {
              alert("El ganador fue BANCA");
          } else if (player.puntos > banca.puntos) {
              alert("El ganador fue JUGADOR");
          } else {
              alert("EMPATE");
          }
      }
  }
}
