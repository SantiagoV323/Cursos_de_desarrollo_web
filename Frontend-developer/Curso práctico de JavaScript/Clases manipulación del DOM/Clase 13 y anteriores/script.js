//_______________________________________CLase 13__________________________________
// // En esta clase se aprendió a seleccionar elementos HTML, a modificarlos y a crear nuevos elementos y agregarlos al DOM. También se aprendió a obtener el valor de un input y a cambiarlo. Finalmente se aprendió a obtener el valor de un atributo de un elemento HTML y a cambiarlo.

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// En esta clase se tratará el event listening

// Escuchar clicks en un botón

function eventClick() {
    // parsear el valor de los inputs a números
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);
    // sumar los números
    const suma = num1 + num2;
    console.log(`El resultado de la suma es ${suma}`);
    pResult.innerText = `El resultado de la suma es ${suma}`;
    // otra forma de hacerlo:
    // console.log(`El resultado de la suma es(+input1.value + +input2.value)`);
}


// ___________________________________NOTAS____________________________________
// Diferencias en la conversión de strings a números:

// Utilizando el operador unario +:
// const numero1 = +cadena;

// Utilizando Number():
// const numero2 = Number(cadena);

// Utilizando parseInt():
// const numero3 = parseInt(cadena, 10);

// Notas:
// - El operador + es conciso, pero puede ser menos explícito.
// - Number() es explícito y maneja conversiones precisas.
// - parseInt() es útil para obtener la parte entera y permite especificar la base numérica.
// - En casos de precisión y claridad, se prefiere Number().
// - Si se necesita solo la parte entera, parseInt() es una opción.
// - La elección dependerá del contexto y las preferencias de estilo del desarrollador.
//______________________________________________________________________________
// _____________________________________________________________________________