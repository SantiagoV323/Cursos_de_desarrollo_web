// En esta clase se enseñarán más métodos para recorrer arrays, como find, forEach y some.
        // Resumen:
            // find() : Devuelve ++el primer elemento++ del array que cumpla con la condición dada

            // foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array (no devuelve un nuevo array. En lugar de eso, se utiliza para realizar acciones o ejecutar una función proporcionada en cada elemento del array sin alterar el array original.)

            // some() : Comprueba si al menos un elemento del array cumple con la condición que le damos (devuelve true o false)
            // filter() : Devuelve todos los elementos del array que cumplan con la condición dada
            
            // map() : Crea un nuevo array aplicando una función a cada elemento del array original. Devuelve un nuevo array con los resultados de aplicar la función a cada elemento.

// Find

// Find devuelve el primer elemento que encuentre en el array que cumpla con la condición que se le pasa en la función. Si no encuentra ningún elemento que cumpla con esa condición devuelve undefined. Trabaja con true o false.

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audífonos", costo: 1700 }
];

// find requiere una función como parámetro, esta función debe tener un return con la condición que se quiere que cumpla el elemento que se quiere encontrar
// find se utiliza para encontrar un elemento en específico dentro de un array

var encuentraArticulo = articulos.find(function(articulo){ // Se crea un nuevo array que va a almacenar el elemento si este se encuentra
    return articulo.nombre === "Laptop"; // Se busca el elemento que tenga el nombre Laptop // find finaliza cuando encuentra el elemento que cumple con la condición, por lo que si hay más elementos que cumplan con la condición, find no los va a encontrar
});


// ForEach

// ForEach ejecuta la función que se le pasa como parámetro por cada elemento del array. No crea un nuevo array con los resultados, sino que modifica el array original.
    // En otras palabras, ForEach recorre el array y ejecuta la función que se le pasa como parámetro por cada elemento del array, no genera un nuevo array, sino filtra los elementos deseados

articulos.forEach(function(articulo){ // Se crea una función anónima temporal que va a recibir un artículo
    console.log(articulo.nombre); // Se imprime el nombre de cada artículo
});

// for each es útil cuando se quiere recorrer un array y hacer algo con cada elemento, como imprimirlo en consola, o modificarlo, o eliminarlo, etc.



// Some

// Some comprueba si al menos un elemento del array cumple con la condición que se le pasa como parámetro. Devuelve true o false.
    // Some es útil cuando se quiere comprobar si al menos un elemento del array cumple con la condición que se le pasa como parámetro

var articulosBaratos = articulos.some(function(articulo){ // Se crea un nuevo array que va a almacenar los elementos que encuentre
    return articulo.costo <= 700; // Se busca el elemento que tenga un costo menor o igual a 700
});

// Some es útil cuando se quiere comprobar si al menos un elemento del array cumple con la condición que se le pasa como parámetro. Se debe tener en cuenta que some devuelve true o false, no el elemento que cumple con la condición.
