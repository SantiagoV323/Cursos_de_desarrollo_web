// Los condicionales if son una herramienta muy poderosa para poder tomar decisiones en nuestro código. Con ellos podemos decidir si un bloque de código se ejecuta o no. Para que un bloque de código se ejecute, la condición que le pasemos debe ser verdadera. Si la condición es falsa, el bloque de código no se ejecutará.

if (true) { // Todo lo que esté dentro de los paréntesis es la condición. Siempre deber ser verdad, si no, el bloque de código no se ejecutará.
    console.log("Hola, soy true");
} else if (true) { // el else if sirve para evaluar otra condición en caso de que la primera sea falsa.
    console.log("Hola, soy true");
} else {  // el else sirve para ejecutar un bloque de código en caso de que la condición sea falsa.
    console.log("Hola, soy false");
}

// Ejemplo:

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar");
} else if (edad >= 19) {
    console.log("Puedes votar, pero será tu primera votación");
} else {
    console.log("No puedes votar");
}

// Si bien, los condicionales if son muy útiles, no siempre son la mejor opción. En el siguiente ejemplo, vamos a ver cómo podemos mejorar el código anterior utilizando un operador ternario.

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar");
} else {
    console.log("No puedes votar");
}

// Operador ternario:

// condición ? true : false;

// Ejemplo:

var edad = 18;

edad === 18 ? console.log("Puedes votar") : console.log("No puedes votar");

// Ejemplo:

var numero = 1;

numero === 1 ? console.log("Soy un 1") : console.log("No soy un 1"); // Devuelve "Soy un 1" porque la condición es verdadera.