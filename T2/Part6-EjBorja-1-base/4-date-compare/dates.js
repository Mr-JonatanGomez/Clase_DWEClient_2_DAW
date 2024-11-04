/* 
17.55
4. Comparación de fechas:

Realiza un programa que pida por prompt el día, mes y año de tu cumpleaños. 
Indica cuantos días han pasado desde tu cumpleaños hasta el día de hoy


 */

// para sacar cada parte actual

/*let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1; // Los meses empiezan desde 0
let año = fechaActual.getFullYear();
*/

let fechaActual = new Date();
//formateamos fecha actual
let fechaFormActual = fechaActual.toLocaleDateString("es-ES"); // Cambia "es_ES" a "es-ES"
console.log(fechaFormActual); // Debería mostrar la fecha en formato dd/mm/yyyy
/* 5
3
1952 */

let diaUser = Number(prompt("Introduce el día de nacimiento"));
let mesUser = Number(prompt("Introduce el mes de nacimiento"));
let anoUser = Number(prompt("Introduce el año de nacimiento"));

// Crear el objeto Date con el formato "año/mes/día"
let cumpleañosUser = new Date(anoUser, mesUser - 1, diaUser); // Mes se ajusta ya que enero es 0 en Date()

// Formateamos
cumpleañosUser = cumpleañosUser.toLocaleDateString("es-ES");
console.log(cumpleañosUser); 


/*
Para calcular cuántos días han pasado desde una fecha de cumpleaños hasta el día actual, necesitamos:

Pedir la fecha de cumpleaños (día, mes, y año) con prompt.
Crear un objeto Date con esa fecha de cumpleaños.
Crear un objeto Date con la fecha de hoy.
Calcular la diferencia en días entre ambas fechas.
Aquí tienes el código para realizarlo:

javascript
Copiar código
// Pedir día, mes y año del cumpleaños
let diaUser = Number(prompt("Introduce el día de nacimiento"));
let mesUser = Number(prompt("Introduce el mes de nacimiento"));
let anoUser = Number(prompt("Introduce el año de nacimiento"));

// Crear la fecha de cumpleaños como un objeto Date
let cumpleañosUser = new Date(anoUser, mesUser - 1, diaUser); // Mes ajustado (0 = enero)

// Crear la fecha de hoy como un objeto Date
let fechaActual = new Date();

// Calcular la diferencia en milisegundos
let diferenciaMilisegundos = fechaActual - cumpleañosUser;

// Convertir la diferencia de milisegundos a días
let diasPasados = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

console.log(`Han pasado ${diasPasados} días desde tu cumpleaños hasta hoy.`); */
