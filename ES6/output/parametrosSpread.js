const mostrarDatosSpread = (...datos) => {
  console.log(datos);
};

const arregoDatos = ["Jeronimo", 23, "correo@correo.com", "Mexico"];
mostrarDatosSpread(...arregoDatos);