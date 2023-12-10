const calculator = document.querySelector("#container");
const displayOperation = document.querySelector("#operations"); //Display que mostra as operações
const displayResult = document.querySelector("#result"); //Display que mostra os resultados
const keys = document.querySelector("#keys");

//Função para calcular os dados recebidos da calculadora
const calculate = (n1, n2, operator) => {
  const add = n1 + n2;
  const sub = n1 - n2;
  const mult = n1 * n2;
  const div = n1 / n2;

  //Usando a verificação do !Number.isInteger para saber se o número é inteiro ou decimal, em caso de um número decimal o número de casas decimais não será maior que 2
  if (operator === "addition") {
    if (!Number.isInteger(add)) {
      return add.toFixed(2);
    } else {
      return add;
    }
  }

  if (operator === "subtract") {
    if (!Number.isInteger(sub)) {
      return sub.toFixed(2);
    } else {
      return sub;
    }
  }

  if (operator === "multiply") {
    if (!Number.isInteger(mult)) {
      return mult.toFixed(2);
    } else {
      return mult;
    }
  }

  if (operator === "divide") {
    if (!Number.isInteger(div)) {
      return div.toFixed(2);
    } else {
      return div;
    }
  }
};

//Função para limpar os dados da calculadora
const clear = () => {
  const datasetArray = [
    "firstValue",
    "modValue",
    "operator",
    "previousKeyType"
  ];
  for (const key in datasetArray) {
    calculator.dataset[datasetArray[key]] = "";
  }

  displayResult.textContent = 0;
  displayOperation.textContent = 0;
};

keys.addEventListener("click", (e) => {
  const button = e.target.closest("button"); //Pega apenas o elemento botão do bloco "key" do HTML

  if (button) {
    const action = button.dataset.action; //Pega apenas o elementos com dataset dentro da tag button
    //O uso do trim() é para remover os espaços em brancos de qualquer string antes de adicionar o valor a calculadora
    const keyContent = button.textContent.trim(); //Pega o conteúdo do botão
    const previousKeyType = calculator.dataset.previousKeyType; //Define uma propriedade ao elemento do botão

    if (!action) {
      calculator.dataset.previousKeyType = "number"; //Adicionando o tipo "number" aos botões que não forem "action"

      //Se o botão não tiver um dataset, então ele é um número;
      if (
        displayResult.textContent === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        displayResult.textContent = keyContent;
      } else {
        displayResult.textContent += keyContent;
      }

      //Configurações do display de operação
      if (
        displayOperation.textContent === "0" ||
        previousKeyType === "calculate"
      ) {
        displayOperation.textContent = keyContent;
      } else {
        displayOperation.textContent += keyContent;
      }
    } else {
      //Se o botão tiver um dataset, então ele é uma função;
      //Verificando as funções da calculadora

      //Função Decimal, adiciona um . ao número do display resultado
      if (action === "decimal") {
        calculator.dataset.previousKeyType = "decimal";

        if (
          previousKeyType === "operator" ||
          (previousKeyType === "calculate" &&
            !displayResult.textContent.includes("."))
        ) {
          displayResult.textContent = "0.";
          displayOperation.textContent += "0.";
        } else if (!displayResult.textContent.includes(".")) {
          displayResult.textContent += ".";
          displayOperation.textContent += ".";
        }
      }

      //Função Sinal, troca o sinal do número do display resultado
      if (action === "signal") {
        calculator.dataset.previousKeyType = "signal";

        if (displayResult.textContent !== "0") {
          if (!displayResult.textContent.includes("-")) {
            displayResult.textContent = "-" + displayResult.textContent;
          } else {
            displayResult.textContent *= -1;
          }
        }

        if (displayOperation.textContent !== "0") {
          if (!displayOperation.textContent.includes("-")) {
            displayOperation.textContent = "-" + displayOperation.textContent;
            console.log("CASO ###");
          } else {
            displayOperation.textContent *= -1;
          }
        }
      }

      //Função Porcentagem, divide o valor do display resultado por 100, transformando o valor em percentual
      if (action === "percent") {
        calculator.dataset.previousKeyType = "percent";

        if (previousKeyType === "percent") {
          return;
        } else {
          if (displayResult.textContent === "0") {
            return;
          } else {
            displayResult.textContent /= 100;
            displayOperation.textContent += "%";
          }
        }
      }
    }

    //Variáveis utilizadas para as operações da calculadora
    let firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    let secondValue = displayResult.textContent;

    //Função dos Operadores, determina qual será o operador do cálculo
    if (
      action === "addition" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      calculator.dataset.previousKeyType = "operator";

      if (previousKeyType !== "operator") {
        displayOperation.textContent += keyContent;

        if (firstValue && operator && previousKeyType !== "calculate") {
          const valueCalculated = calculate(
            parseFloat(firstValue),
            parseFloat(secondValue),
            operator
          );
          displayResult.textContent = valueCalculated;
          displayOperation.textContent = valueCalculated + keyContent;
          calculator.dataset.firstValue = valueCalculated;
        } else {
          // displayResult.textContent = "0";
          calculator.dataset.firstValue = displayResult.textContent;
        }
      } else {
        const symbols = ["÷", "×", "−", "+"];
        const hasSymbol = symbols.some((i) =>
          displayOperation.textContent.includes(i)
        );
        if (hasSymbol) {
          //Remove o último operador e substitui pelo novo operador digitado
          displayOperation.textContent = displayOperation.textContent.slice(
            0,
            -1
          );
          displayOperation.textContent += keyContent;
        } else {
          displayOperation.textContent += keyContent;
        }
      }

      calculator.dataset.firstValue = displayResult.textContent;
      calculator.dataset.operator = action;
    }

    //Função Igual, calcula os valores visíveis na tela
    if (action === "calculate") {
      calculator.dataset.previousKeyType = "calculate";

      if (firstValue) {
        if (previousKeyType === "calculate") {
          calculator.dataset.firstValue = displayResult.textContent;
          secondValue = calculate.dataset.modValue; //Representa o último valor digitado
        }
        displayResult.textContent = calculate(
          parseFloat(firstValue),
          parseFloat(secondValue),
          operator
        );
        displayOperation.textContent = displayResult.textContent;
      }
      calculator.dataset.modValue = secondValue;
    }

    //Funções adicionais
    //Função Limpar, limpa todos os valores da tela e da memória
    if (action === "clear") {
      calculator.dataset.previousKeyType = "clear";
      clear();
    }

    //Função Deletar, apaga o último valor inserido na calculadora
    if (action === "delete") {
      calculator.dataset.previousKeyType = "delete";

      if (
        displayResult.textContent !== "0" &&
        displayResult.textContent.length > 1
      ) {
        if (previousKeyType === "operator") {
          displayResult.textContent = 0;
        } else {
          displayResult.textContent = displayResult.textContent.slice(0, -1); //Remove o último dado da calculadora no display de resultado
        }
      } else if (displayResult.textContent.length == 1) {
        displayResult.textContent = 0;
      }

      if (
        displayOperation.textContent !== "0" &&
        displayOperation.textContent.length > 1
      ) {
        if (previousKeyType === "operator") {
          displayOperation.textContent = 0;
        } else {
          displayOperation.textContent = displayOperation.textContent.slice(
            0,
            -1
          ); //Remove o último dado da calculadora no display das operações
        }
      } else if (displayOperation.textContent.length == 1) {
        displayOperation.textContent = 0;
      }
    }
  }
});