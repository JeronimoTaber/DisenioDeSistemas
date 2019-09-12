const nombres = ['Carlos', 'Arturo', 'Lucas'];
const numero_caracteres = nombres.map(function (nombre) {
  console.log(`${nombre} tiene ${nombre.length} letras`);
}); //()=> {
//    return ;
//}

() => {
  return;
};

const numero_caracteres2 = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras`);
const numero_caracteres3 = nombres.map(nombre => {
  return `${nombre} tiene ${nombre.length} letras`;
});
console.log(numero_caracteres2);