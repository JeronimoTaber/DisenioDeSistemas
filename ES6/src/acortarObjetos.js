var crearObjeto = function (nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
        //tambien se puede escribir sin : nombre o :edad como
        //nombre
        //edad
        mostrarInfo: function () {
            return nombre + " tiene " + edad + " a\u00F1os";
        }
    };
};
console.log(crearObjeto("Jeronimo", 23).mostrarInfo());
