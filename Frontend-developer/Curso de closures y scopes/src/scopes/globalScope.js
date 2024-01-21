// Para entender el concepto de global, primero se deben entender las variables. Entender cómo funcionan diferentes factores como:
// Asignación
// Declaración
// Re-asignación
// Re-declaración


var a; // Declarando
var b = 'b'; // Esta es la forma más común, pues se declara y asigna al mismo tiempo
b = 'bb'; // Re-asignando
var a = 'aa'; // Re-declarando, porque a diferencia la re-asignación de b, aquí se está declarando nuevamente la variable a


// GLOBAL SCOPE

// Cualquier variable que se encuentren en el documento, serán variables globales y se instancian dentro del objeto window, por lo tanto se puede acceder a ellas en cualquier momento

var fruit = 'apple';

console.log(fruit); 

function bestFruit () {
    console.log(fruit);
}

bestFruit();

// Por lo tanto, las variables que se asignen en la parte superior del documento, o, en la parte superior del documento, serán variables globales


// otro caso de global scope

function countries() {
    country = 'Colombia' // Global. No se ha declarado la variable
    console.log (country)
}

countries(); 
console.log(country) // y también llama el valor de la variable country, por la forma en la que esta se declaró, pues, le hace variable global