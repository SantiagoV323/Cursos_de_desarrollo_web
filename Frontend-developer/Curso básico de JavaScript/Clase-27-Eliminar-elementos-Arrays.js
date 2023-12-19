// En esta clase se enseñará cómo eliminar elementos de un array.

// Para eliminar elementos de un array se utiliza el método splice y shift. Splice recibe dos parámetros: el primero indica el índice del elemento que queremos eliminar, y el segundo indica cuántos elementos queremos eliminar a partir de ese índice. Shift elimina el primer elemento del array.

// shift() : Elimina el primer elemento del array y devuelve ese elemento. Este método modifica la longitud del array. Ejemplo:

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audífonos", costo: 1700 }
];

articulos.shift(); // Elimina el primer elemento del array mutando el array original.
    // En caso de que no se quisiera mutar el array original:
var articulos2 = articulos.shift(); // Elimina el primer elemento del array y lo almacena en una nueva variable.



// splice() : Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. Este método modifica el contenido del array original. Ejemplo:

articulos.splice(2, 1); // Elimina un elemento del array en el índice 2 mutando el array original.
    // En caso de que no se quisiera mutar el array original:
var articulos3 = articulos.splice(2, 1); // Elimina un elemento del array en el índice 2 y lo almacena en una nueva variable.



// pop() : Elimina el último elemento de un array y lo devuelve. Este método modifica la longitud del array. Ejemplo:

articulos.pop(); // Elimina el último elemento del array mutando el array original.
    // En caso de que no se quisiera mutar el array original:
var articulos4 = articulos.pop(); // Elimina el último elemento del array y lo almacena en una nueva variable.


