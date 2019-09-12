var mostrarDatosSpread = function () {
    var datos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        datos[_i] = arguments[_i];
    }
    console.log(datos);
};
var arregoDatos = ["Jeronimo", 23, "correo@correo.com", "Mexico"];
mostrarDatosSpread.apply(void 0, arregoDatos);
