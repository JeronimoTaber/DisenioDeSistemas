import { mensajeAlerta, saludo } from "./modulos/mensajeAlerta";
import Persona from "./modulos/clasePersona";

mensajeAlerta("Hola Mundo");
saludo();

const jero = new Persona("Jeronimo Taber", 23);
jero.mostrarInfo();