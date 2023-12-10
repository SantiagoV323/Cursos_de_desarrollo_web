//Existen dos clases de coersión: implícita y explícita. La coersión implícita es cuando el lenguaje cambia el tipo de valor por nosotros, mientras que la coersión explícita es cuando nosotros obligamos al lenguaje a cambiar el tipo de valor (como un parseo).

// Índice: 
// Coersión implícita línea 11
// Coersión explícita línea 20



// Ejemplo de coersión implícita:

var a = 4 + "7"; // El resultado es 47
typeof a; // "string" Esto es coersión implícita, ya que el lenguaje cambió el tipo de valor por nosotros.

var b = 4 * "7"; // El resultado es 28
typeof a; // "number" El resultado ocurre porque se parseó el string "7" a un número 7 y luego se multiplicó por 4 como ints normales.



// Ejemplo de coersión explícita:
var a = 20;
var b = a + ""; // b es un string
console.log(b); // "20" como string. Porque se parseó el número 20 a un string "20". y lo podemos comprobar con:
typeof b; // "string"
// Forzar a la variable "a" a ser un string sin necesidad de concatenarla con un string vacío:
var c = String(a); // c es un string. Esto debido a que se forzó a la variable "a" a ser un string mediante un parseo.
// Comprobación:
typeof c; // "string"
// Forzar a la variable "c" a ser un número:
var d = Number(c); // d es un número. Esto debido a que se forzó a la variable "c" a ser un número mediante un parseo.
// Comprobación:
typeof d; // "number"