function suma(a, b) {
  return a + b
}
function resta(a, b) {
  return a - b
}
function multiplicacion(a, b) {
  return a * b
}
function division(a, b) {
  return a / b
}
/* Export functions, para que esten a disposicion del resto de funciones*/

module.exports = {
  suma,
  resta,
  multiplicacion,
  division
}

/* En el PACKAGE.json, se declaran los test con el objeto SCRIPTS
"scripts": {
        "test": "mocha",
        "test1": "mocha test/test",
        "test2": "mocha test/test2"
    }


    para hacerlos correr en el rerminal, hariamoS
        npm test, realiza todos los test
        npm run test1 solo test.js (que es donde apunta)
        npm run test2 solo test2.js (que es donde apunta)
*/