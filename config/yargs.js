const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    description: 'este es la base de la tabla '
                })
                .option('l',{
                    alias: 'listar',
                    type:'boolean',
                    default: false,
                    description: 'defime si muestra o no en pantalla la tabla'
                })
                .option('h',{
                    alias: 'hasta',
                    type:'number',
                    default: 10,
                    description:'define hasta donde se desplegara la tabla'
                })
                .check((argv)=>{
                    if(isNaN(argv.b)){
                        throw 'la base tiene que ser un numero'
                    }
                    return true;
                })
                .check((argv)=>{
                    if(isNaN(argv.h)){
                        throw 'el hasta tiene que ser un numero'
                    }
                    return true;
                })

                .argv;

module.exports = argv;

    