

const argv = require('yargs')
            .option('n', {
                alias: 'numero',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'

            })

            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'
            })

            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'Hasta que numero queremos multiplicar la base'
            })

            .check ( (argv, options  ) => {
                if ( isNaN( argv.numero ) ){
                    throw 'La base tiene que ser un numero'
                }

                return true;
            })            

            .argv;

module.exports = argv;