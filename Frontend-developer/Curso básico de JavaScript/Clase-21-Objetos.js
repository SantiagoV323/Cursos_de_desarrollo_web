// Los objetos en JavaScript son una colección de propiedades y métodos, los objetos pueden ser creados con la sintaxis de llaves { } y para acceder a sus propiedades se utiliza la sintaxis de punto . o corchetes [ ]. El paradigma de la programación orientada a objetos nos permite crear abstracciones en forma de objetos para modelar problemas del mundo real más cercano a como los concebimos en la vida cotidiana.

// Crear un objeto

var objeto = {}; // Esto es un objeto vacío

var miAuto = { // Un objeto tiene propiedades: palabras clave y valores
    marca: "Toyota", // Propiedad es "marca", valor es "Toyota". Es importante la coma
    modelo: "Corolla",
    annio: 2020,
};

// Acceder a las propiedades de un objeto

miAuto.marca; // "Toyota"