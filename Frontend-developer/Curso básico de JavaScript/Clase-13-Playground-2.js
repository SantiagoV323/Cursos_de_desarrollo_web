// En este desafío vas a recibir un parámetro secreto en la función solution. Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual.

// Input

// solution(1)
// solution(5)
// solution(10)

// Output

// false
// false
// true

// Solución:
export function solution(secreto) {
    return secreto > 5; // Devuelve true si secreto es mayor a 5 y false si secreto es menor o igual a 5. Básicamente retorna el resultado de la comparación entre secreto y 5, esta comparación con el operador > devuelve true o false, es decir, un booleano.
}