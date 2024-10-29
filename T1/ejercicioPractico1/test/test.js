//Ejemplo test usando el modulo assert disponible en NodeJS

// 1º Cargar el modulo assert para poder hacer comprobaciones

var assert = require("assert")

//2º cargar modulo con las funciones a testerar ( al meter ../ te da a elegir desde donde)
var operaciones = require("../operations")

//TEST

it("comprobar funcion suma", function () {
  assert.equal(operaciones.suma(1, 3), 4)
  assert.equal(operaciones.suma(-1, 3), 2)
  assert.equal(operaciones.suma(8, 3), 11)
  assert.equal(operaciones.suma(8, -3), 5)
})

it("comprobar funcion division", function () {
  assert.equal(operaciones.division(12, 3), 4)
  assert.equal(operaciones.division(9, 3), 3)
  assert.equal(operaciones.division(9, -3), -3)
})

/* Esto es la metodologia inversa, haciendo los test primeronpm*/
