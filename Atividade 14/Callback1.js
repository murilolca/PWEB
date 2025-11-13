const prompt = require('prompt-sync')();
//parenteses indicam que estamos executando a função prompt-Sync. ao fazer
//isso , a função retorna um valor, que é uma nova função que pode ser usada para criar prompts
function saudacao(nome){
    console.log('OI ' + nome);
}
function entradaNOme(callback){
    let nome = prompt('Digite seu Nome: ');
    callback(nome); //chamando a dunção callback (saudação)
}
entradaNOme(saudacao);