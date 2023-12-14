// El bucle for es una estructura de control que se repite cierto número de veces. 
// Existen cuatro tipos de bucles for: for, for in, for of y for await of. En este artículo nos enfocaremos en el bucle for.
// El for in se utiliza para iterar sobre las propiedades de un objeto.
// El for of se utiliza para iterar sobre los elementos iterables de un objeto (arrays, strings, etc).
// El for await of se utiliza para iterar sobre las promesas de un objeto.
// el bucle for se utiliza para iterar sobre un bloque de código un número determinado de veces.

// el bucle for se compone de tres partes: inicialización, condición e incremento. A continuación su estructura:
// for (inicialización; condición; incremento) { // donde inicialización es la variable que se va a incrementar, condición es la condición que debe cumplirse para que el bucle se siga ejecutando e incremento es el valor que se le va a sumar a la variable inicialización.
//     // código a ejecutar
// }

// Ejemplo:

for (var i = 0; i < 10; i++) { // i es la variable que se va a incrementar, 10 es la condición que debe cumplirse para que el bucle se siga ejecutando e i++ es el valor que se le va a sumar a la variable i.
    console.log(i); // Devuelve los números del 0 al 9, ya que en 10 la condición ya no se cumple y no realiza el recorrido
}

// Ejemplo2:

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`); // En este caso, los símbolos ${} se utilizan para acceder a los valores del array estudiantes.
}

for (var i=0; i< estudiantes.length; i++) { // En este caso, la variable i se utiliza para acceder a los valores del array estudiantes. Y mientras la variable i sea menor a la longitud del array estudiantes, se va a ejecutar el bloque de código.
    saludarEstudiantes(estudiantes[i]); // Y aquí se llama a la función saludarEstudiantes y se le pasa como parámetro la variable i, que accederá a la posición del index de cada estudiante, luego incrementará.
}

// Forma 2 de hacerlo:

for (var estudiante of estudiantes) { // En este caso, la variable estudiante se utiliza para acceder a los valores del array estudiantes. Y mientras la variable estudiante sea menor a la longitud del array estudiantes, se va a ejecutar el bloque de código.
    saludarEstudiantes(estudiante); // Y aquí se llama a la función saludarEstudiantes y se le pasa como parámetro la variable estudiante, que accederá a la posición del index de cada estudiante, luego incrementará.
}
