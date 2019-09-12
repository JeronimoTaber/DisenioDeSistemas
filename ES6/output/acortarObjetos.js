const crearObjeto = (nombre, edad) => {
  return {
    nombre: nombre,
    edad: edad,

    //tambien se puede escribir sin : nombre o :edad como
    //nombre
    //edad
    mostrarInfo() {
      return `${nombre} tiene ${edad} años`;
    }

  };
};

console.log(crearObjeto("Jeronimo", 23).mostrarInfo());