function calcularMedia() {
  const nome = prompt("Digite o nome do aluno:");

  const nota1 = parseFloat(prompt("Digite a primeira nota:"));
  const nota2 = parseFloat(prompt("Digite a segunda nota:"));
  const nota3 = parseFloat(prompt("Digite a terceira nota:"));
  const nota4 = parseFloat(prompt("Digite a quarta nota:"));

  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  alert(`A média de ${nome} é ${media.toFixed(2)}`);
}


function calcularOperacoes() {
  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));

  const soma = num1 + num2;
  const subtracao = num1 - num2;
  const produto = num1 * num2;
  const divisao = num1 / num2;
  const resto = num1 % num2;

  alert(
    `Resultados:\n` +
    `Soma: ${soma}\n` +
    `Subtração: ${subtracao}\n` +
    `Produto: ${produto}\n` +
    `Divisão: ${divisao}\n` +
    `Resto da divisão: ${resto}`
  );
}
