// Truthy y Falsy se refiere a si un valor puede ser considerado como verdadero o falso cuando es evaluado en un contexto booleano. En pocas palabras, es un Booleano.

// Los valores Falsy son aquellos que al convertirlos a booleanos dan como resultado false. Los valores Falsy son: false, 0, null, NaN, undefined, y "". Todo lo demás es Truthy.

Boolean(); // El resultado es false porque no se le pasó ningún valor
Bollean(0); // El resultado es false porque 0 es un valor Falsy
Boolean(null); // El resultado es false porque null es un valor Falsy
Boolean(NaN); // El resultado es false porque NaN es un valor Falsy. NaN significa Not a Number.
Boolean(undefined); // El resultado es false porque undefined es un valor Falsy
Boolean(""); // El resultado es false porque "" es un valor Falsy


// Todo lo demás es Truthy. Por ejemplo:
Boolean(1); // El resultado es true porque 1 es un valor Truthy
Boolean("a"); // El resultado es true porque "a" es un valor Truthy
Boolean([]); // El resultado es true porque un array es un valor Truthy debido a que es un objeto y todos los objetos son Truthy.
Boolean({}); // El resultado es true porque un objeto es un valor Truthy.
Boolean(function(){}); // El resultado es true porque una función es un valor Truthy.


// Ahora, para evaluar si algo es verdadero o es falso, como en un if, podemos hacer lo siguiente:
var a = 4;
if (a) {
    console.log("a existe y es verdadero");
} else {
    console.log("a no existe o es falso");
}