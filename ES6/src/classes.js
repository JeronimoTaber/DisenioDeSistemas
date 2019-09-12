var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, correo) {
        this.nombre = nombre, //las variables dentro de una clase se llaman ppropiedades
            this.edad = edad,
            this.correo = correo;
    }
    Usuario.prototype.mostrarSaludo = function (mensaje) {
        return mensaje;
    };
    Usuario.prototype.mostrarInfo = function () {
        return "\n            <br />\n            <b> Nombre:</b> " + this.nombre + "  <br />\n            <b> Edad:</b> " + this.edad + "  <br />\n            <b> Correo:</b> " + this.correo + "  <br />\n            <hr />\n        ";
    };
    return Usuario;
}());
var jeronimo = new Usuario("jeronimo taber", 23, "jerotaber@gmail.com");
//document.write(jeronimo.nombre);
//document.write(jeronimo.mostrarSaludo("hola"));
document.write(jeronimo.mostrarInfo());
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, edad, correo, carrera) {
        var _this = _super.call(this, nombre, edad, correo) || this;
        _this.carrera = carrera;
        return _this;
    }
    Estudiante.prototype.mostrarInfo = function () {
        return "\n            <br />\n            <b> Nombre:</b> " + this.nombre + "  <br />\n            <b> Edad:</b> " + this.edad + "  <br />\n            <b> Correo:</b> " + this.correo + "  <br />\n            <b> Carrera:</b> " + this.carrera + "    <br />\n            <hr />\n        ";
    };
    return Estudiante;
}(Usuario));
var alejandro = new Estudiante("alejandro", 33, "testmaill@test", "Desarrollador web");
document.write(alejandro.mostrarInfo());
