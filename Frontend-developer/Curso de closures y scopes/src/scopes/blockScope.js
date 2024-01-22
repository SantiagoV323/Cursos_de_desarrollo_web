// EcmaS 6 introdujo variables let y const que funcionan para trabajar en contexto local o en bloques, en cambio var es global
    //Bloque es el código que va dentro de handlebars {}

function fruits() {
    if (true){
        var fruit1 = 'apple'; // global
        let fruit2 = 'pear';    // blockScope
        const fruit3 = 'durian';    // blockScope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();