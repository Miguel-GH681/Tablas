const colors = require('colors');

archivo = '';

const tabla = (base = 1, listar, limite)=>{

    if (listar) {
        console.log('=================');
        console.log(`=  Tabla del ${ base }  =`);
        console.log('=================');
    }

    for(let i = 1; i <= limite; i++){
        archivo += `${ colors.red(base) } * ${ colors.green(i) } = ${ colors.blue(base * i) }\n`;
    }
    if(listar){
        console.log(archivo);
    }

    return archivo;
}

module.exports = {
    tabla
};