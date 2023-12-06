//Existen dos tipos de funciones

        //Funciones declarativas
function miFuncion() {
        return 3;
}


        //Funciones de expresión.
                //Se les conoce como funciones anónimas porque no llevan nombre
                //Necesitan parámetros
var miFuncion = function(a,b) {
        return a + b;
}


miFuncion();




//Ejemplos

function saludarEstudiantes(estudiante) {
        console.log(estudiante);
}
        //uso
saludarEstudiantes("Santiago");
        //También se podría usar con return
function sumar(a,b) {
        return a + b;
}