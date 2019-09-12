const promesa = new Promise((resolve: (arg0: string) => void,reject: (arg0: string) => void) => {

    setTimeout(()=>{
        const exito = false;
        if(exito){
            resolve('La operacion tuvo exito');
        }
        else{
            reject('La operacion no tuvo exito');
        }
    }, 4000);
});

promesa.then((mensaje:string)=>{
    alert(mensaje);
});

promesa.catch((mensaje:string)=>{
    alert(mensaje);
})