
//_______________________________________CLase 14__________________________________
//

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// En esta clase se tratará el event listening

// Escuchar clicks en un botón desde JS

form.addEventListener('submit', sumarInputValues) // no se pone paréntesis porque no se está ejecutando la función, sino que se está pasando como parámetro

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault(); // evita que se recargue la página
    // parsear el valor de los inputs a números
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);
    // sumar los números
    const suma = num1 + num2;
    pResult.innerText = `El resultado de la suma es ${suma}`;
}