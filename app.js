
const {creartabla} = require('./helpers/multiplicacion')
const argv = require('./config/yargs')
console.clear();

 
 creartabla(argv.b,argv.l,argv.h)
     .then(msg => console.log(msg))
     .catch(err => console.log(err))

