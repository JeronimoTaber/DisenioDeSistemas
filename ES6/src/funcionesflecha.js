var nombres = ['Carlos', 'Arturo', 'Lucas'];
var numero_caracteres = nombres.map(function (nombre) {
    console.log(nombre + " tiene " + nombre.length + " letras");
});
//()=> {
//    return ;
//}
(function () {
    return;
});
var numero_caracteres2 = nombres.map(function (nombre) { return nombre + " tiene " + nombre.length + " letras"; });
var numero_caracteres3 = nombres.map(function (nombre) {
    return nombre + " tiene " + nombre.length + " letras";
});
console.log(numero_caracteres2);
