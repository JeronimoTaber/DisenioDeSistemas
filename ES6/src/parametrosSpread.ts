const mostrarDatosSpread = (...datos: (string | number)[]) => {
    console.log(datos);
}

const arregoDatos = ["Jeronimo", 23, "correo@correo.com", "Mexico"];

mostrarDatosSpread(...arregoDatos);