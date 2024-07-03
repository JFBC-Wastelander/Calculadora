function soma(valor1, valor2) {
  let soma = valor1 + valor2;
  console.log("A soma é: ");
  return soma;
}

function subtracao(valor1, valor2) {
  let subtracao = valor1 - valor2;
  console.log("A subtração é: ");
  return subtracao;
}

function multipliacao(valor1, valor2) {
  let multipliacao = valor1 * valor2;
  console.log("A multiplicação é: ");
  return multipliacao;
}

function divisao(valor1, valor2) {
  let divisao = valor1 / valor2;
  console.log("A divisão é: ");
  return divisao;
}

function porcentagem(valor1) {
  let porcentagem = valor1 / 100;
  console.log("A porcentagem é: ");
  return porcentagem;
}

module.exports = {
  soma,
  subtracao,
  multipliacao,
  divisao,
  porcentagem,
};
