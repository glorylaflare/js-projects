let tentativas = 12;

function SortearNumeros() {
  senhaA = parseInt(Math.random() * 10);
  senhaB = parseInt(Math.random() * 10);
  senhaC = parseInt(Math.random() * 10);
  senhaD = parseInt(Math.random() * 10);
}

SortearNumeros();

function desativarDigitos() {
  document.getElementById("valor-a").disabled = false;
  document.getElementById("valor-b").disabled = true;
  document.getElementById("valor-c").disabled = true;
  document.getElementById("valor-d").disabled = true;

  document.getElementById("valor-a").value = "";
  document.getElementById("valor-b").value = "";
  document.getElementById("valor-c").value = "";
  document.getElementById("valor-d").value = "";
}

function Reiniciar() {
  document.getElementById("resultado").innerHTML = "O jogo foi reiniciado!";
  tentativas = 12;
  SortearNumeros();
  desativarDigitos();
  document.getElementById("botao-chutar").disabled = false;
}

function VerificaNumero() {
  let chuteA = parseInt(document.getElementById("valor-a").value);
  let chuteB = parseInt(document.getElementById("valor-b").value);
  let chuteC = parseInt(document.getElementById("valor-c").value);
  let chuteD = parseInt(document.getElementById("valor-d").value);

  if (chuteA == senhaA) {
    document.getElementById("resultado").innerHTML = `Acertou o 1º dígito!`;
    document.getElementById("valor-a").disabled = true;
    document.getElementById("valor-b").disabled = false;
  } else if (chuteA < senhaA) {
    tentativas = tentativas - 1;
    document.getElementById(
      "resultado"
    ).innerHTML = `Errou! O dígito é maior! Ainda lhe resta ${tentativas} tentativas.`;
  } else if (chuteA > senhaA) {
    tentativas = tentativas - 1;
    document.getElementById(
      "resultado"
    ).innerHTML = `Errou! O dígito é menor! Ainda lhe resta ${tentativas} tentativas.`;
  }

  if (chuteB == senhaB) {
    document.getElementById("resultado").innerHTML = `Acertou o 2º dígito!`;
    document.getElementById("valor-b").disabled = true;
    document.getElementById("valor-c").disabled = false;
  } else if (chuteB < senhaB) {
    tentativas = tentativas - 1;
    document.getElementById(
      "resultado"
    ).innerHTML = `Errou! O dígito é maior! Ainda lhe resta ${tentativas} tentativas.`;
  } else if (chuteB > senhaB) {
    tentativas = tentativas - 1;
    document.getElementById(
      "resultado"
    ).innerHTML = `Errou! O dígito é menor! Ainda lhe resta ${tentativas} tentativas.`;
  }

  if (chuteC == senhaC) {
    document.getElementById("resultado").innerHTML = `Acertou o 3º dígito!`;
    document.getElementById("valor-c").disabled = true;
    document.getElementById("valor-d").disabled = false;
  } else if (chuteC < senhaC) {
    tentativas = tentativas - 1;
    document.getElementById(
      "resultado"
    ).innerHTML = `Errou! O dígito é maior! Ainda lhe resta ${tentativas} tentativas.`;
  } else if (chuteC > senhaC) {
    tentativas = tentativas - 1;
    document.getElementById(
      "resultado"
    ).innerHTML = `Errou! O dígito é menor! Ainda lhe resta ${tentativas} tentativas.`;
  }

  if (chuteD == senhaD) {
    document.getElementById(
      "resultado"
    ).innerHTML = `Parabéns! Você descobriu a senha do cofre.`;
    document.getElementById("valor-d").disabled = true;
    document.getElementById("botao-chutar").disabled = true;
  } else if (chuteD < senhaD) {
    tentativas = tentativas - 1;
    document.getElementById(
      "resultado"
    ).innerHTML = `Errou! O dígito é maior! Ainda lhe resta ${tentativas} tentativas.`;
  } else if (chuteD > senhaD) {
    tentativas = tentativas - 1;
    document.getElementById(
      "resultado"
    ).innerHTML = `Errou! O dígito é menor! Ainda lhe resta ${tentativas} tentativas.`;
  }

  if (
    chuteA > 9 ||
    chuteB > 9 ||
    chuteC > 9 ||
    chuteD > 9 ||
    chuteA < 0 ||
    chuteB < 0 ||
    chuteC < 0 ||
    chuteD < 0
  ) {
    document.getElementById(
      "resultado"
    ).innerHTML = `Por favor, digite um número no intervalo de 0 a 9`;
  }
}

function Chutar() {
  if (tentativas == 0) {
    document.getElementById(
      "resultado"
    ).innerHTML = `Suas tentativas acabaram! A senha era ${senhaA}${senhaB}${senhaC}${senhaD}`;
    document.getElementById("valor-d").disabled = true;
    document.getElementById("botao-chutar").disabled = true;
  } else {
    VerificaNumero();
  }
}
