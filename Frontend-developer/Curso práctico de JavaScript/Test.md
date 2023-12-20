# ¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

## Instrucciones para tomar esta prueba
- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que el éxito no se mide por cuánto tiempo te toma aprender, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!

## Variables y operaciones
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
1. ¿Qué es una variable y para qué sirve?
   - ✅ Una variable es un espacio de memoria que permite almacenar datos de distinto tipo.
2. ¿Cuál es la diferencia entre declarar e inicializar una variable?
   - ✅ Inicializar una variable es crear (declarar) una variable y asignarle un valor para que se guarde. Declarar una variable, en cambio, es crear dicha variable sin asignarle ningún tipo de dato al bloque de memoria.
3. ¿Cuál es la diferencia entre sumar números y concatenar strings?
   - ✅ Sumar números es una operación matemática, concatenar se trata de unir sin mezclar. Es decir, sin que cambien los valores originales que se están empleando.
4. ¿Cuál operador me permite sumar o concatenar?
   - ✅ En JS el símbolo + permite realizar ambas operaciones, depende del contexto y la sintaxis si aplica una u otra operación.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
- Nombre
  - ✅ string
- Apellido
  - ✅ string
- Nombre de usuario en Platzi
  - ✅ string
- Edad
  - ✅ number
- Correo electrónico
  - ✅ string
- Mayor de edad
  - ✅ boolean
- Dinero ahorrado
  - ✅ number
- Deudas
  - ✅ number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

``` javascript
var nombre = prompt ("Escriba su nombre");
var apellido = prompt ("Escriba su apellido");
var user = prompt ("Escriba su nombre de usuario");
var edad = prompt ("Escriba su edad");
var correo = prompt ("Escriba su correo electrónico");
//Si es mayor de edad:
var edad = prompt("Escriba su edad");
console.log (edad > 18);
//
var ahorro;
var deuda;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
- Nombre completo (nombre y apellido)
``` javascript
console.log(nombreCompleto = nombre + " " + apellido)
```
- Dinero real (dinero ahorrado menos deudas)
``` javascript
console.log(dineroReal = ahorro-deuda)
```

## Funciones
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una función?
  - Una función es un bloque de código que realiza tareas asignadas y tiene la característica de ser reutilizable. Este acepta entradas (argumentos/parámetros) y retornar un dato en concreto resultado de la operación de las tareas dentro de la misma
- ¿Cuándo me sirve usar una función en mi código?
  - Siempre que sea posible, ya que las funciones solo pueden aportar ventajas
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
  - Los parámetros son las variables declaradas en la definición de la función que actúan como plantilla cuando se invoque dicha función, para que esta trabaje con ellos.
  - Los argumentos, son los valores que se le asignan a esas parámetros de la función cuando se llama dicha función.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
```javascript
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";


console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
### Solución:
``` javascript
const name = prompt ("Escriba su nombre");
const lastname = prompt ("Escriba su apellido");
const completeName = name + lastname;
const nickname = prompt ("Escriba su nickname");


function info (completeName, nickname){
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
```

## Condicionales
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un condicional?
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
- ¿Puedo combinar funciones y condicionales?

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```javascript
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

## Ciclos
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un ciclo?
- ¿Qué tipos de ciclos existen en JavaScript?
- ¿Qué es un ciclo infinito y por qué es un problema?
- ¿Puedo mezclar ciclos y condicionales?

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
``` javascript
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un array?
- ¿Qué es un objeto?
- ¿Cuándo es mejor usar objetos o arrays?
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

## ¿Cómo te fue? 🏆

¡Felicidades por completar la prueba de JavaScript! Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que ya no puedes abandonar el curso, debes completarlo hasta el final. No importa cuánto tiempo te tome. Yo sé que tú puedes. Y tú deberías de saberlo también.

¡Te espero en la siguiente clase para comenzar!