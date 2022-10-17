const fs = require('fs');
const archivo = require('./helpers/multiplicacion');
const {base, listar} = require('./config/yargs.config');

let salida = archivo.tabla(base, listar, limite)

fs.writeFileSync(`./documents/tabla-${base}.txt`, salida)
console.log('Archivo Creado!!');
