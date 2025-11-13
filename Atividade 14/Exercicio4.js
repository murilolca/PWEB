const fs = require('fs');// carregando ódulo filesystem
const data = fs.readFileSync('File.txt');
//A execução é bloqueada aqui até o arquivo ser lido 
console.log(data.toString());