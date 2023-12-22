// El querySelector nos permite seleccionar un elemento de nuestro HTML, en este caso seleccionamos el h1, es similar a como se hace en CSS.

const h1 = document.querySelector('h1');
const p = document.querySelector('p'); // se usan ' ' para elementos con clase
const prrf = document.querySelector('.prrf'); // se usa . para elementos con clase
const pid = document.getElementById('pid'); // se usa # para elementos con ID
const input = document.querySelector('input');

console.log({ // se usa {} para imprimir varios elementos como si se tratara de un objeto
    h1,
    p,
    prrf,
    pid,
    input
});

console.log(input.value); // se usa .value para obtener el valor de un input

h1.innerHTML = 'Hola desde JavaScript'; // se usa .innerHTML para cambiar el contenido de un elemento.

h1.innerHTML = `Hola desde <br> JavaScript`; // Esto no solo inserta texto, también puede insertar etiquetas HTML.

// Interactuar con los elementos de las clases en HTML desde JavaScript

console.log(h1.getAttribute('class')); // se usa .getAttribute para obtener el valor de un atributo de un elemento HTML
h1.setAttribute('class', 'rojo'); // se usa .setAttribute para cambiar el valor de un atributo de un elemento HTML, en este caso se cambia el valor de la llave contenida en class a rojo
h1.classList.add('grande'); // se usa .classList.add para agregar una clase a un elemento HTML. En este caso se agrega la clase grande al elemento h1 el cual tendrá dos clases: rojo y grande
h1.classList.remove('grande'); // se usa .classList.remove para remover una clase a un elemento HTML. En este caso se remueve la clase grande al elemento h1 el cual tendrá una clase: rojo
h1.classList.toggle('grande'); // se usa .classList.toggle para agregar o remover una clase a un elemento HTML. En este caso se agrega la clase grande al elemento h1 el cual tendrá dos clases: rojo y grande. La diferencia con .add y .remove es que si la clase ya existe, .toogle la remueve, y si no existe, la agrega.
h1.classList.replace('grande', 'chico'); // se usa .classList.replace para reemplazar una clase por otra a un elemento HTML. En este caso se reemplaza la clase grande por la clase chico al elemento h1 el cual tendrá dos clases: rojo y chico


// Modificar el value de un input

input.value = 'Nuevo valor'; // se usa .value para cambiar el valor de un input

// Crear elementos y agregarlos al DOM

pid.innerHTML = ""; // esto borra todo el contenido del elemento pid

const img = document.createElement('img'); // se usa .createElement para crear un elemento HTML. En este caso se crea un elemento img.
img.setAttribute('src', 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*');
console.log(img);

pid.append(img); // se usa .append para agregar un elemento HTML al final de otro elemento HTML. En este caso se agrega el elemento img al final del elemento pid, el cual es un párrafo.
