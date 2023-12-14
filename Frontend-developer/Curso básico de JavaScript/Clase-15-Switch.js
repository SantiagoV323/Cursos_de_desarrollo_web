// Switch es una estructura de control que nos permite tomar decisiones entre varias opciones.

// Switch sirvee en los casos en los que tenemos muchas opciones y no queremos escribir muchos else if.

// Ejemplo:

var numero = 1;

switch (numero) {   // Dentro de los paréntesis va la condición que queremos evaluar. En este caso, queremos evaluar si la variable numero es igual a 1.
    case 1: // En caso de que el dato sea igual a 1, se ejecuta el bloque de código que está debajo.
        console.log("Hola, soy uno"); // Si la condición se cumple, se ejecuta este bloque de código.
        break; // El break sirve para indicar que el bloque de código terminó.
    case 2: // En caso de que el dato sea igual a 2, se ejecuta el bloque de código que está debajo.
        console.log("Hola, soy 2");
        break;
    default: // El default se ejecuta en caso de que ninguno de los casos anteriores se cumpla.
        console.log("Hola, soy default"); // Si la condición no se cumple, se ejecuta este bloque de código.
}