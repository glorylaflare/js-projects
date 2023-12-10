let equipes = [];

function adicionarEquipe() {
  const nomeEquipe = document.getElementById("nomeEquipe").value;

  if (nomeEquipe.length == "") {
    alert("Por favor, digite o nome da Equipe!");
  } else {
    let equipe = {
      provas: 0,
      posicao_um: 0,
      posicao_dois: 0,
      posicao_tres: 0,
      pontos: 0
    };

    equipe["nome"] = nomeEquipe;
    equipes.push(equipe);

    exibeEquipesNaTela(equipes);
    document.getElementById("nomeEquipe").value = "";
  }
}

function exibeEquipesNaTela(equipes) {
  let elemento = "";

  for (let i = 0; i < equipes.length; i++) {
    calculaPontos(equipes[i]);

    elemento += "<tr><td class='coluna-eqp'>" + equipes[i].nome + "</td>";
    elemento += "<td class='coluna-pro'>" + equipes[i].provas + "</td>";
    elemento += "<td class='coluna-pou'>" + equipes[i].posicao_um + "</td>";
    elemento += "<td class='coluna-pod'>" + equipes[i].posicao_dois + "</td>";
    elemento += "<td class='coluna-pot'>" + equipes[i].posicao_tres + "</td>";
    elemento += "<td class='coluna-pts'>" + equipes[i].pontos + "</td>";
    elemento +=
      "<td class='coluna-acao'><button class='botao-acao botao-pou' onClick='adicionarPontoPU(" +
      i +
      ")'>1º</button></td>";
    elemento +=
      "<td class='coluna-acao'><button class='botao-acao botao-pod' onClick='adicionarPontoPD(" +
      i +
      ")'>2º</button></td>";
    elemento +=
      "<td class='coluna-acao'><button class='botao-acao botao-pot' onClick='adicionarPontoPT(" +
      i +
      ")'>3º</button></td>";
    elemento += "</tr>";
  }

  const tabelaEquipes = document.getElementById("tabelaEquipes");
  tabelaEquipes.innerHTML = elemento;
}

exibeEquipesNaTela(equipes);

function adicionarPontoPU(i) {
  let equipe = equipes[i];
  equipe.posicao_um++;

  for (let i = 0; i < equipes.length; i++) {
    let equipe = equipes[i];

    equipe.provas++;
  }

  exibeEquipesNaTela(equipes);
}

function adicionarPontoPD(i) {
  let equipe = equipes[i];
  equipe.posicao_dois++;
  exibeEquipesNaTela(equipes);
}

function adicionarPontoPT(i) {
  let equipe = equipes[i];
  equipe.posicao_tres++;
  exibeEquipesNaTela(equipes);
}

function calculaPontos(equipe) {
  equipe.pontos =
    equipe.posicao_um * 5 + equipe.posicao_dois * 3 + equipe.posicao_tres;
}

function zerarPontos() {
  for (let i = 0; i < equipes.length; i++) {
    let equipe = equipes[i];

    equipe.provas = 0;
    equipe.posicao_um = 0;
    equipe.posicao_dois = 0;
    equipe.posicao_tres = 0;
  }
  exibeEquipesNaTela(equipes);
}
