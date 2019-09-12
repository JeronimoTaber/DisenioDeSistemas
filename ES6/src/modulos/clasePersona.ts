export default class Persona{
    private nombre:string ;
    private edad:number ;
    constructor(nombre:string ,edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInfo(){
        console.log(`${this.nombre} tiene ${this.edad} años`);
    }
}
