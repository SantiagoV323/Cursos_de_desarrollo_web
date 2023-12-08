// El hoisting es un proceso que realiza el compilador de JavaScript al momento de leer nuestro código, que consiste en declarar todas las variables que encontremos al inicio del archivo, con su respectivo valor inicial (undefined). Esto permite que podamos utilizar la variable antes de que esta sea declarada, lo cual es muy útil en algunos casos, sin embargo, actualmente se encuentra en desuso, debido a la implementación de los estándares EcmaScript 2015 (ES6), pero es importante conocerlo porque de todas formas puede aparecer en el código de proyectos legacy. También solía usarse con funciones.

console.log(miNombre);  // undefined
var miNombre = ""

hey();

function hey() {
    console.log("Hola " + miNombre);
} // = Hola undefined (undefined es el valor por defecto de las variables)