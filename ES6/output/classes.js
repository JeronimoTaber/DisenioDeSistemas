function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Usuario {
  constructor(nombre, edad, correo) {
    _defineProperty(this, "nombre", void 0);

    _defineProperty(this, "edad", void 0);

    _defineProperty(this, "correo", void 0);

    this.nombre = nombre, //las variables dentro de una clase se llaman ppropiedades
    this.edad = edad, this.correo = correo;
  }

  mostrarSaludo(mensaje) {
    return mensaje;
  }

  mostrarInfo() {
    return `
            <br />
            <b> Nombre:</b> ${this.nombre}  <br />
            <b> Edad:</b> ${this.edad}  <br />
            <b> Correo:</b> ${this.correo}  <br />
            <hr />
        `;
  }

}

const jeronimo = new Usuario("jeronimo taber", 23, "jerotaber@gmail.com"); //document.write(jeronimo.nombre);
//document.write(jeronimo.mostrarSaludo("hola"));

document.write(jeronimo.mostrarInfo());

class Estudiante extends Usuario {
  constructor(nombre, edad, correo, carrera) {
    super(nombre, edad, correo);

    _defineProperty(this, "carrera", void 0);

    this.carrera = carrera;
  }

  mostrarInfo() {
    return `
            <br />
            <b> Nombre:</b> ${this.nombre}  <br />
            <b> Edad:</b> ${this.edad}  <br />
            <b> Correo:</b> ${this.correo}  <br />
            <b> Carrera:</b> ${this.carrera}    <br />
            <hr />
        `;
  }

}

const alejandro = new Estudiante("alejandro", 33, "testmaill@test", "Desarrollador web");
document.write(alejandro.mostrarInfo());