// La función constructora es una función que se utiliza para crear objetos. Sirve para crear varios objetos con las mismas características y así evitar crearlos uno por uno repitiendo código. Es como una plantilla o forma automatizada de crear objetos.

// Esto es lo que se quiere automatizar

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

// Constructor

function auto(marca, modelo, annio){ // Se crea una función constructora con los parámetros que se quieren automatizar
    this.marca = marca; // esta línea funciona así: el objeto que se cree con esta función constructora va a tener una propiedad llamada marca y el valor de esa propiedad va a ser el que se le pase como parámetro a la función constructora y se almacenará en la variable marca
    this.modelo = modelo;
    this.annio = annio;
}

// Para crear un nuevo objeto con la función constructora se hace así:

var autoNuevo = new auto("Tesla", "Model 3", 2020); // Se crea una variable que va a almacenar el nuevo objeto creado con la función constructora y se le pasa como parámetro los valores que se quieren que tenga el objeto. New es una palabra reservada que se utiliza para crear nuevos objetos.

var autoNuevo2 = new auto("Tesla", "Model X", 2018); // se ha creado un nuevo objeto
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

// Reto: Crear un loop donde se creen nuevos autos con la función constructora

// Solución

var cantidadARegistrar = prompt("¿Cuántos autos quieres registrar?"); // Se pide al usuario que ingrese la cantidad de autos que quiere registrar

var autos = []; // Se crea un array vacío para almacenar los nuevos objetos

for (var i=0 ; i<cantidadARegistrar ; i++ ){ // Se crea un loop para que se repita la función constructora la cantidad de veces que el usuario ingresó
    var marca = prompt("Ingresa la marca del auto"); // Se pide al usuario que ingrese los valores que se quieren que tenga el objeto, prompt es una función que sirve para pedir datos al usuario
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto(marca, modelo, annio)); // Se crea un nuevo objeto con la función constructora y se le pasan los valores que el usuario ingresó, luego se pushean en el array autos
}

for (var i=0 ; i<autos.length ; i++ ){ // Se crea un loop para recorrer el array autos y mostrar los objetos que se crearon
    console.log(autos[i]);
}
