function jogar(escolhaUsuario) {
  const emojis = {
    pedra: "✊",
    papel: "✋",
    tesoura: "✌️"
  };

  let numeroAleatorio = Math.random();
  let escolhaComputador;

  if (numeroAleatorio < 0.33) {
    escolhaComputador = "pedra";
  } else if (numeroAleatorio < 0.66) {
    escolhaComputador = "papel";
  } else {
    escolhaComputador = "tesoura";
  }

  let resultado;
  if (escolhaUsuario === escolhaComputador) {
    resultado = "Empate!";
  } else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra")
  ) {
    resultado = "Você venceu!";
  } else {
    resultado = "Computador venceu!";
  }

  document.getElementById("resultado").innerHTML =
    `<strong>${resultado}</strong>`;

  document.getElementById("escolhas").innerHTML =
    `Você: ${emojis[escolhaUsuario]} &nbsp;&nbsp; | &nbsp;&nbsp; Computador: ${emojis[escolhaComputador]}`;
}
