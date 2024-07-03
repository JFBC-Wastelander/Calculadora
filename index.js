const calculos = require("./function.js");
const prompt = require("prompt-sync")();
while (true) {
  console.log("Escreva qual operação deseja realizar:");
  let input = prompt(
    `1- Adição. 2- Subtração. 3- Multiplicação. 4- Divisão. 5- Porcentagem. 6- Sair. `
  );

  if (
    input === "Adição".toLowerCase() ||
    input === "Adiçao".toLowerCase() ||
    input === "Adicão".toLowerCase() ||
    input === "Adicao".toLowerCase() ||
    input == 1
  ) {
    let valor1 = +prompt("Informe o primeiro valor: ");
    let valor2 = +prompt("Informe o segundo valor: ");
    if (!isNaN(valor1) && !isNaN(valor2)) {
      let res = calculos.soma(valor1, valor2);
      console.log(res);
    } else {
      console.log("ERRO! Insira apenas números (evite caracteres e letras)");
    }
  } else if (
    input === "Subtração".toLowerCase() ||
    input === "Subtracão".toLowerCase() ||
    input === "Subtraçao".toLowerCase() ||
    input === "Subtracao".toLowerCase() ||
    input == 2
  ) {
    let valor1 = +prompt("Informe o primeiro valor: ");
    let valor2 = +prompt("Informe o segundo valor: ");
    if (!isNaN(valor1) && !isNaN(valor2)) {
      let res = calculos.subtracao(valor1, valor2);
      console.log(res);
    } else {
      console.log("ERRO! Insira apenas números (evite caracteres e letras)");
    }
  } else if (
    input === "Multiplicação".toLowerCase() ||
    input === "Multiplicaçao".toLowerCase() ||
    input === "Multiplicacão".toLowerCase() ||
    input === "Multiplicacao".toLowerCase() ||
    input == 3
  ) {
    let valor1 = +prompt("Informe o primeiro valor: ");
    let valor2 = +prompt("Informe o segundo valor: ");
    if (!isNaN(valor1) && !isNaN(valor2)) {
      let res = calculos.multipliacao(valor1, valor2);
      console.log(res);
    } else {
      console.log("ERRO! Insira apenas números (evite caracteres e letras)");
    }
  } else if (
    input === "Divisão".toLowerCase() ||
    input === "Divisao".toLowerCase() ||
    input == 4
  ) {
    let valor1 = +prompt("Informe o primeiro valor: ");
    let valor2 = +prompt("Informe o segundo valor: ");
    if (!isNaN(valor1)&& !isNaN(valor2)) {
      let res = calculos.divisao(valor1, valor2);
      console.log(res);
    } else {
      console.log("ERRO! Insira apenas números (evite caracteres e letras)");
    }
  } else if (input === "Porcentagem".toLowerCase() || input == 5) {
    let valor1 = +prompt("Informe o valor: ");
    if (!isNaN(valor1)) {
      let res = calculos.porcentagem(valor1);
      console.log(res);
    } else {
      console.log("ERRO! Insira apenas números (evite caracteres e letras)");
    }
  } else if (input === "Sair".toLowerCase() || input == 6) {
    console.log("Encerrando...");
    process.exit()
  } else {
    console.log("Não entendi... Você digitou certo?\n");
  }
}