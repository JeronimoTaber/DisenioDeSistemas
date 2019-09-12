"use strict";
exports.__esModule = true;
var mensajeAlerta_1 = require("./modulos/mensajeAlerta");
var clasePersona_1 = require("./modulos/clasePersona");
mensajeAlerta_1.mensajeAlerta("Hola Mundo");
mensajeAlerta_1.saludo();
var jero = new clasePersona_1["default"]("Jeronimo Taber", 23);
jero.mostrarInfo();
