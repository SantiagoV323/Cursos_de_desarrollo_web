// El querySelector nos permite seleccionar un elemento de nuestro HTML, en este caso seleccionamos el h1, es similar a como se hace en CSS.

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const prrf = document.querySelector('.prrf');
const pid = document.querySelector('#pid'); // se usa # para seleccionar por id
const input = document.querySelector('input');

console.log({ // se usa {} para imprimir varios elementos como si se tratara de un objeto
    h1,
    p,
    prrf,
    pid,
    input
});

console.log(input.value); // se usa .value para obtener el valor de un input