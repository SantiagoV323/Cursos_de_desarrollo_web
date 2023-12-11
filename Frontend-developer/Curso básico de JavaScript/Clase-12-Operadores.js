// Existen distintos tipos de operadores, como:
// Operadores binarios: son los que necesitan dos valores para funcionar, como el + o el -.
3 + 2
50 - 10
10 * 20
20 / 2
"Diego " + "De Granda" // Concatenación de strings con el operador +
!false // Operador unitario, NOT y el resultado es true porque niega a false

// Operadores de asignación: son los que asignan un valor a una variable, como el = o el +=.
var a = 1; // El operador = asigna un valor a una variable
    // Se cuentan con operadores compuestos como +=, -=, *=, /=, == y hasta ===
3 == "3" // Compara los valores y devuelve true porque el operador == no se fija en el tipo de dato
3 === "3" // Compara los valores y el tipo de dato y devuelve false porque son distintos tipos de datos, uno es number y el otro es string

// Existen otros tipos de comparadores como >, <, >=, <=, !=, !==
5 < 3 // Devuelve false porque 5 no es menor a 3
5 > 3 // Devuelve true porque 5 es mayor a 3
5 <= 6 // Devuelve true porque 5 es menor o igual a 6
5 >= 6 // Devuelve false porque 5 no es mayor o igual a 6

// Otros dos operadores que comparan si ambos valores son iguales o uno de ellos es mayor:
a && b // Devuelve true si ambos son verdaderos. && es el operador AND. Este funciona como si fuera un if, si ambos son verdaderos, devuelve true, si uno de ellos es falso, devuelve false. Y se sabe que son verdaderos porque son Truthy debido a que a y b son distintos de 0.
a || b // Devuelve true si alguno de los dos es verdadero. || es el operador OR

// Operadores unarios: son los que necesitan un solo valor para funcionar, como el ! de !false.
!false // Devuelve true porque niega a false
!true // Devuelve false porque niega a true

// Operadores ternarios: son los que necesitan tres valores para funcionar, como el operador ternario que necesita una condición, un valor si se cumple la condición y un valor si no se cumple la condición.
var edad = 18; // Si la edad es mayor o igual a 18, entonces es mayor de edad, sino, es menor de edad.
var resultado = edad === 18 ? "Puedes votar" : "No puedes votar"; // Si la edad es igual a 18, entonces devuelve "Puedes votar", sino, devuelve "No puedes votar"

// También existen caracteres de operadores incrementales, como:
var edad = 40;
edad++; // Incrementa la edad en 1
//si se quisiera incrementar en 2, se haría así:
edad += 2; // Incrementa la edad en 2
// También se puede hacer con el operador --
// Si se quisiera incrementar el valor de forma exponencial o multiplicativa, se haría así:
edad **= 2; // Eleva la edad al cuadrado
edad--; // Decrementa la edad en 1