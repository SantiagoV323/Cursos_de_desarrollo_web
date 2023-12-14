// Un array es una estructura de datos que nos permite almacenar varios valores y agruparlos en una sola variable. Se pueden almacenar cualquier tipo de datos: números, strings, objetos, funciones y otros arrays.
// Hay dos formas de declarar un array:

// var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"]; // Esta es la forma más común de declarar un array.
// var frutas = new Array("Manzana", "Plátano", "Cereza", "Fresa"); // Esta es la otra forma de declarar un array.

//Según la documentación de Mozilla, la forma recomendada de declarar un array es la primera. Y según la última versión de ECMAScript, ya no es necesario utilizar new Array() para declararlos.

// Un array vacío sirve para inicializar un array sin elementos. Esto puede ser útil para agregar elementos más tarde con push() o unshift(). Sin embargo, si un array ya tiene elementos, aún se pueden agregar más elementos al final con push() o al principio con unshift().

// Ejemplo:

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
// llamar los elementos del array
console.log(frutas); // Devuelve ["Manzana", "Plátano", "Cereza", "Fresa"]
    // llamar un elemento en específico
console.log(frutas[0]); // Devuelve "Manzana"

// conocer la longitud de un array
console.log(frutas.length); // Devuelve el valor 4

// Métodos para mutar arrays:

// push(): Agrega uno o más elementos al final del array y devuelve la nueva longitud que tiene el array.

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var masFrutas = frutas.push("Uvas"); // Agrega "Uvas" al final del array.
console.log(frutas); // Devuelve ["Manzana", "Plátano", "Cereza", "Fresa", "Uvas"]
console.log(masFrutas); // Devuelve 5

// pop(): Elimina el último elemento de un array y lo devuelve. Este método modifica la longitud del array.

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var ultimo = frutas.pop(); // Elimina "Fresa" del final del array.
console.log(frutas); // Devuelve ["Manzana", "Plátano", "Cereza"]
console.log(ultimo); // Devuelve "Fresa"

// unshift(): Agrega uno o más elementos al inicio del array y devuelve la nueva longitud que tiene el array.

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var nuevaLongitud = frutas.unshift("Uvas"); // Agrega "Uvas" al inicio del array.
console.log(frutas); // Devuelve ["Uvas", "Manzana", "Plátano", "Cereza", "Fresa"]
console.log(nuevaLongitud); // Devuelve 5

// shift(): Elimina el primer elemento de un array y lo devuelve. Este método modifica la longitud del array.

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var borrarFruta = frutas.shift(); // Elimina "Manzana" del inicio del array.
console.log(frutas); // Devuelve ["Plátano", "Cereza", "Fresa"]
console.log(borrarFruta); // Devuelve "Manzana"

// indexOf(): Devuelve el primer índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var posicion = frutas.indexOf("Cereza"); // Devuelve 2
console.log(posicion);

// lastIndexOf(): Devuelve el último índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var posicion = frutas.lastIndexOf("Cereza"); // Devuelve 2
console.log(posicion);

// join(): Une todos los elementos de un array en una cadena y devuelve esta cadena. (Una cadena es una serie de caracteres. Por ejemplo: "Hola, soy una cadena")

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var cadena = frutas.join(); // Devuelve "Manzana,Plátano,Cereza,Fresa"
console.log(cadena);

// split(): Divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

var cadena = "Manzana,Plátano,Cereza,Fresa";
var frutas = cadena.split(","); // Separa cada elemento por comas.
console.log(frutas); // Devuelve ["Manzana", "Plátano", "Cereza", "Fresa"]

// reverse(): Invierte el orden de los elementos de un array en la misma variable que lo contiene y devuelve el array invertido.

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var reversa = frutas.reverse(); // Invierte el orden del array.
console.log(frutas); // Devuelve ["Fresa", "Cereza", "Plátano", "Manzana"]
console.log(reversa); // Devuelve ["Fresa", "Cereza", "Plátano", "Manzana"]

// sort(): Ordena los elementos de un array localmente y devuelve el array ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var ordenado = frutas.sort(); // Ordena el array.