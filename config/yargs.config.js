const { argv } = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla'
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
                        describe: 'Límite de la tabla'
                    })
                    .check((argv, options)=>{
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un número'
                        } else if(isNaN(argv.h)){
                            throw 'El límite tiene que ser un número'
                        }
                        return true
                    })

base = argv.b;
listar = argv.l;
limite = argv.h;

module.exports = {
    base,
    listar,
    limite
}