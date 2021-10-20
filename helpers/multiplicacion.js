const fs = require('fs');
const colors = require('colors');
const creartabla = async(tabla,listar,hasta) => {
   
    try {
        
        let salida, consola = '';
                for(i=1;i<hasta + 1;i++){
                    let total = i*tabla;
                    consola+=`${tabla} ${'x'.red} ${i} ${'='.red}${total}\n`
                    salida+=`${tabla} x ${i} =${total}\n`
                };   
        if(listar){
            console.log('============='.green)
            console.log('TABLA DEL:'.underline.green,colors.red(tabla))
            console.log('============='.green)
            console.log(consola);
                  
        }
            fs.writeFileSync(`./salida/tabla_${tabla}.txt`,salida);
            return (`tabla creada`.green)
    } catch (error) {
     error;
    }
   
}



    module.exports = {
        creartabla
    }