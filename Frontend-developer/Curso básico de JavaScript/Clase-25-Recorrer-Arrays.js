// Para los arrays, existen dos grupos de métodos principales: Uno que permite mutarlo y otro que permiite recorrerlo. En esta clase nos enfocaremos en los métodos que permiten recorrerlo utilizando objetos en lugar de números o strings.

var articulos = [
    { nombre: "Bici", costo: 3000 }, // Este es un objeto cpn dos propiedades
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// Ahora los métodos

// Filter: Sirve para filtrar elementos de un array. Recibe una función como parámetro. Si la función devuelve true, el elemento se agrega al array resultante. Si devuelve false, se descarta.

var articulosFiltrados = articulos.filter(function (articulo) { // El método filter recibe una función como parámetro. Esta función recibe un artículo como parámetro y devuelve true o false dependiendo de si el artículo cumple con la condición.
    return articulo.costo <= 500; // Devuelve los artículos que cuestan menos de 500
});

// Map: Sirve para mapear ciertos elementos. Recibe una función como parámetro. Esta función recibe un artículo como parámetro y devuelve el elemento que se va a mapear. 

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre; // Devuelve un array con los nombres de los artículos del array original
});

// La diferencia entre filter y map es que filter devuelve un array con los elementos que cumplen la condición, mientras que map devuelve un array con los elementos que se mapearon.