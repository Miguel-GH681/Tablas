const colors = require('colors');

fileView = '';
fileSave = '';

const tabla = (base = 1, listar, limite)=>{

    for(let i = 1; i <= limite; i++){
        fileView += `${ colors.red(base) } * ${ colors.green(i) } = ${ colors.blue(base * i) }\n`;
        fileSave += `${ base } * ${ i } = ${ base * i }\n`;
    }
    if(listar){
        console.log('=================');
        console.log(`=  Tabla del ${ base }  =`);
        console.log('=================');
        console.log(fileView);
    }

    return fileSave;
}

module.exports = tabla;