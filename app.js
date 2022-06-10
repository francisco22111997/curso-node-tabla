const fs = require('fs');
const yargs = require('yargs');
const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors')



//const [ , , arg3= 'numero=5' ] = process.argv;
//const [ , numero = 2 ] = arg3.split('=');

//console.log(process.argv);
console.log (argv);


//console.log('numero: yargs', argv.numero);



//const numero = 9;

crearArchivoTabla( argv.numero, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );








