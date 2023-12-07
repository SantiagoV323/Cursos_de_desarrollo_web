// El Scope se refiere a la jerarquía de un elemento. Puede ser global o local. Global se refiere a la raíz y local se refiere al elemento o variable que se encuentra dentro de una función determinada

    //Desde global no se puede acceder a local
    //Desde local se puede acceder a un elemento en global

var miNombre = "Santiago";
function nombre() {
    var miApellido = "Vega";
    console.log(miNombre+" "+miApellido)
}

nombre();