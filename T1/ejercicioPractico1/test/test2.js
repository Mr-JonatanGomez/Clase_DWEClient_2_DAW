// EJEMPLO DE TEST con libreria SHOULD

// 1º Cargar libvreria should

var should = require("should")

//2º cargar modulo con las funciones a testerar ( al meter ../ te da a elegir desde donde)
var operaciones = require("../operations")

//TEST

it("comprobar funcion resta", function () {
  operaciones.resta.should.be.a.Function()// necesita esta linea extra con respecto a assert
  //que comprueba que operaciones.resta es una funcion
  should.equal(operaciones.resta(1, 3), -2)
  should.equal(operaciones.resta(5, 3), 2)
  should.equal(operaciones.resta(8, 3), 5)
})

it("comprobar funcion multiplicacion", function () {
  operaciones.multiplicacion.should.be.a.Function()
  should.equal(operaciones.multiplicacion(2, 3), 6)
  should.equal(operaciones.multiplicacion(9, -3), -27)
  should.equal(operaciones.multiplicacion(19, 3), 57)
})


// IT es una funcion de mocha
