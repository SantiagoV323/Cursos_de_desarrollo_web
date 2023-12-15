// El bucle while es una estructura de control que se repite mientras una condición sea verdadera. A continuación su estructura con un ejemplo:

// while (condición) {
//     // código a ejecutar
// }

// Ejemplo:

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"]; // Se crea un array con los nombres de los estudiantes

function saludarEstudiantes(estudiante) { // Se crea una función que recibe como parámetro el array estudiantes
    console.log(`Hola, ${estudiante}`); // En este caso, los símbolos ${} se utilizan para acceder a los valores del array estudiantes.
}

// En lugar de usar el for, se usará el while.

while (estudiantes.length > 0) { // Mientras la longitud del array estudiantes sea mayor a 0, se ejecutará la función saludarEstudiantes.
    var estudiante = estudiantes.shift(); // Se crea una variable estudiante que almacena el valor del array estudiantes. Y estidiantes.shift irá eliminando el primer valor del array.
    saludarEstudiantes(estudiante); // Se ejecuta la función saludarEstudiantes.
}