// En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.

// Input

// solution(["Huevo", "Gallina", "Vaca"])
// solution([1, "Gallina", "Vaca"])

// Output

// true
// false

// Solución con IF:
export function solution(arraySecreto) {
    if (typeof arraySecreto[0] === "string") {
        return true;
    } else {
        return false;
    }
}

// Solución con return:

export function solution(arraySecreto) {
    // Verificar si el primer elemento es de tipo string
    return typeof arraySecreto[0] === 'string';
}


// Solución con switch:

export function solution(arraySecreto) {
    switch (typeof arraySecreto[0]) {
        case 'string':
            return true;
        default:
            return false;
    }
}

// Solución con operador ternario:

export function solution(arraySecreto) {
    return typeof arraySecreto[0] === 'string' ? true : false;
}