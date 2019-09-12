function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class Persona {
  constructor(nombre, edad) {
    _defineProperty(this, "nombre", void 0);

    _defineProperty(this, "edad", void 0);

    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarInfo() {
    console.log(`${this.nombre} tiene ${this.edad} años`);
  }

}