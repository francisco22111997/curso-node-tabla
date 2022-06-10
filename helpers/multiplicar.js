const fs = require('fs');
const colors = require('colors');
/*
const crearArchivoTabla = ( numero = 2) =>{
    
    

    return new Promise(( resolve, reject) => {
        
        console.log('***********************************');
        console.log('            TABLA DEL: ', numero);
        console.log('***********************************');

        let salida = '';
        
        for (let i=1 ; i<=10; i++ ){
            salida += (`${numero} x ${i}  = ${numero * i}\n`);
        }
    
       
            console.log(salida);
    
            fs.writeFileSync( `tabla-${numero}.txt`, salida)
            
            resolve(`tabla-${numero}.txt creado`);
        
    }) 
    
    
}
*/

const crearArchivoTabla = async ( numero = 2, l= false, h=10) => {

     
    try {
        if(l){
            console.log('***********************************'.green);
            console.log('            TABLA DEL: ', numero);
            console.log('***********************************'.green);
        }

        let salida, consola = '';
        
        for (let i=1 ; i<=h; i++ ){
            salida += (`${numero} x ${i}  = ${(numero) * i}\n`);
            consola += (`${numero} x ${i}  = ${(numero) * i}\n`).rainbow;
        }

        if(l){
            console.log(consola);
        }else{
            return `Listar esta en ${l}, el archivo fue`;
        }
      

        fs.writeFileSync( `./salida/tabla-${numero}.txt`, salida)
            
        return (`tabla-${numero}.txt creado`);
    } catch (error) {
        throw error;
    }

}


module.exports = {
    crearArchivoTabla
}