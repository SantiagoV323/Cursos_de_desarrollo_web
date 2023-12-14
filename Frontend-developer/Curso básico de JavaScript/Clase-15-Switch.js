// Switch es una estructura de control que nos permite tomar decisiones entre varias opciones.

// Switch sirvee en los casos en los que tenemos muchas opciones y no queremos escribir muchos else if.

// Ejemplo:

var numero = 1;

switch (true) {
    case 1:
        console.log("Hola, soy uno");
        break;
    case 2:
        console.log("Hola, soy 2");
        break;
    default:
        console.log("Hola, soy default");
}