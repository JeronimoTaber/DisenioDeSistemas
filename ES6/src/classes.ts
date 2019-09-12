class Usuario {
    protected nombre:string ;
    protected edad:number ;
    protected correo:string ;

    constructor(nombre:string,edad:number,correo:string){
        this.nombre = nombre, //las variables dentro de una clase se llaman ppropiedades
        this.edad = edad,
        this.correo = correo

    }

    mostrarSaludo(mensaje:string){
        return mensaje;
    }

    mostrarInfo(){
        return `
            <br />
            <b> Nombre:</b> ${this.nombre}  <br />
            <b> Edad:</b> ${this.edad}  <br />
            <b> Correo:</b> ${this.correo}  <br />
            <hr />
        `;
    }
}

const jeronimo = new Usuario("jeronimo taber",23,"jerotaber@gmail.com");
//document.write(jeronimo.nombre);
//document.write(jeronimo.mostrarSaludo("hola"));
document.write(jeronimo.mostrarInfo());

class Estudiante extends Usuario{
    private carrera:string ;

    constructor(nombre:string,edad:number,correo:string,carrera:string){
        super(nombre,edad,correo);
        this.carrera = carrera;
    }

    mostrarInfo(){
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

const alejandro = new Estudiante("alejandro",33,"testmaill@test","Desarrollador web");
document.write(alejandro.mostrarInfo());
