var persona = ['Carlos Arturo', '23', 'Mejico'];
var nombre = persona[0], pais = persona[2], _a = persona[3], profesion = _a === void 0 ? "No especificado" : _a;
//console.log(pais);
var mostrarInfo = function (nombre) {
    console.log(nombre);
};
//mostrarInfo(nombre);
var mostrarInfo2 = function (_a) {
    var _b = _a === void 0 ? persona : _a, nom = _b[0], pais = _b[2];
    console.log(nom, pais);
};
mostrarInfo2(persona);
