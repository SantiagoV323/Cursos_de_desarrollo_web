
function greeting () {
    let userName = 'Ana';    // Las variables declaradas dentro de una función, serán accesibles solo dentro del contexto de la función y sus funciones anidadas siguiendo el orden jerarquico
    console.log(userName);

    if (userName === 'Ana') {
        console.log (`Hello ${userName}!`)
    }
}

greeting(); // El output de esta función comprueba que la variable está siendo accedida sin problema alguno dentro de la función

console.log(userName); // El output comprueba que la variable solo tiene alcance local dentro de la función y no puede ser accedida fuera de ella