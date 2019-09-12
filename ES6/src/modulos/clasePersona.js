"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.mostrarInfo = function () {
        console.log(this.nombre + " tiene " + this.edad + " a\u00F1os");
    };
    return Persona;
}());
exports["default"] = Persona;
