// En este desafío tu función solution recibirá 3 parámetros:

// estudiantes: un array de strings con varios nombres de estudiantes.
// deathCount: un número entero.
// nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
// Tu función debe retornar un array de elementos con las siguientes indicaciones:

// Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

// Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

// 💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.

// Ejemplo 1:

// El array estudiantes contiene los elementos "Nico" y "Zulle". El número deathCount es igual a 0. Y el nuevo estudiante es "Santi". Al deathCount ser igual a 0, "Nico" y "Zulle" se quedan. Y agregamos "Santi" al final.

// // Input
// solution(["Nico", "Zule"], 0, "Santi")

// // Output
// ["Nico", "Zule", "Santi"]

// Ejemplo 2:

// El array estudiantes contiene los elementos "Juan". "Juanita" y "Daniela". El número deathCount es igual a 1. Y el nuevo estudiante es "Julian". Al deathCount ser igual a 1, el último elemento del array de estudiantes ("Daniela") se debe ir. Y agregamos "Julian" al final.

// // Input
// solution(["Juan", "Juanita", "Daniela"], 1, "Julian")

// // Output
// ["Juan", "Juanita", "Julian"]

// Ejemplo 3:

// El array estudiantes contiene los elementos "Nath". "Luisa" y "Noru". El número deathCount es igual a 2. Y el nuevo estudiante es "Cami". Al deathCount ser igual a 2, los últimos 2 elementos del array de estudiantes ("Luisa" y "Noru") se deben ir. Y agregamos "Cami" al final.

// // Input
// solution(["Nath", "Luisa", "Noru"], 2, "Cami")

// // Output
// ["Nath", "Cami"]

// Solución con IF

export function solution(estudiantes, deathCount, nuevo) {
    if (deathCount === 0) {
        estudiantes.push(nuevo);
    } else if (deathCount > 0) {
        estudiantes.splice(-deathCount, deathCount); // Splice recibe 2 parámetros: el primero es el índice donde se va a empezar a eliminar elementos. El segundo es la cantidad de elementos que se van a eliminar. En este caso, -deathCount significa que se va a empezar a eliminar desde el final del array. Y deathCount significa que se van a eliminar deathCount elementos. Elimina los últimos deathCount elementos del array estudiantes.
        deathCount--; // Se resta 1 al deathCount para que el nuevo estudiante no sea eliminado y evitar un bucle infinito.
        estudiantes.push(nuevo);
    }
    return estudiantes;
}

// solución con while

export function solution(estudiantes, deathCount, nuevo) {
    // Mientras haya estudiantes por eliminar (deathCount > 0) y estudiantes en el array
    while (deathCount > 0 && estudiantes.length > 0) {
        // Elimina 1 elemento desde el final del array
        estudiantes.splice(-1, 1);
        // Reduce la cuenta de estudiantes a eliminar en cada iteración
        deathCount--;
    }

    // Agrega el nuevo estudiante al final del array
    estudiantes.push(nuevo);

    // Devuelve el array modificado
    return estudiantes;
}


// solución con for

export function solution(estudiantes, deathCount, nuevo) {

    for (let i = 0; i < deathCount; i++) { // Itera la cantidad de veces que haya que eliminar estudiantes. Explicado con más detalle, mientras haya estudiantes por eliminar (deathCount > 0) y estudiantes en el array, se va a ejecutar el código dentro del for.
        estudiantes.splice(-1, 1); // Elimina 1 elemento desde el final del array
    }

    estudiantes.push(nuevo); // Agrega el nuevo estudiante al final del array

    return estudiantes; // Devuelve el array modificado
}