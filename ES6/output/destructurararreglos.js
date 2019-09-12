const persona = ['Carlos Arturo', '23', 'Mejico'];
const [nombre,, pais, profesion = "No especificado"] = persona; //console.log(pais);

const mostrarInfo = nombre => {
  console.log(nombre);
}; //mostrarInfo(nombre);


const mostrarInfo2 = ([nom,, pais] = persona) => {
  console.log(nom, pais);
};

mostrarInfo2(persona);