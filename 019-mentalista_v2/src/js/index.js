const persons = [
  {
    nome: "samuel",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/singer-light-skin-tone_1f9d1-1f3fb-200d-1f3a4.png",
    dica: {
      d_1: "Sou famoso",
      d_2: "Trabalho geralmente a noite",
      d_3: "Gosto de Rock",
      d_4: "Sou muito estiloso",
    },
  },
  {
    nome: "alessandra",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-scientist-medium-light-skin-tone_1f469-1f3fc-200d-1f52c.png",
    dica: {
      d_1: "Estudo a todo momento",
      d_2: "Trabalho em um laboratório",
      d_3: "Uso um jaleco",
      d_4: "Sou apaixonada por química",
    },
  },
  {
    nome: "ivan",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/mechanic-dark-skin-tone_1f9d1-1f3ff-200d-1f527.png",
    dica: {
      d_1: "Me sujo bastante",
      d_2: "Uso um boné",
      d_3: "Tenho muitas ferramentas",
      d_4: "Meu prazer é consertar coisas",
    },
  },
  {
    nome: "mel",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-firefighter-medium-light-skin-tone_1f469-1f3fc-200d-1f692.png",
    dica: {
      d_1: "Usa-se muita água no meu trabalho",
      d_2: "Salvo vidas a todo custo",
      d_3: "Geralmente chego de caminhão",
      d_4: "Subo em lugares muito altos",
    },
  },
  {
    nome: "jean",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/office-worker-light-skin-tone_1f9d1-1f3fb-200d-1f4bc.png",
    dica: {
      d_1: "Luto pelos seus direitos",
      d_2: "Aplico a lei com vigor",
      d_3: "Geralmente estou de gravata",
      d_4: "Trabalho com muitos papeis",
    },
  },
  {
    nome: "eduardo",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/health-worker-light-skin-tone_1f9d1-1f3fb-200d-2695-fe0f.png",
    dica: {
      d_1: "Atendo você a qualquer momento",
      d_2: "Meu objetivo é fazer você se sentir bem",
      d_3: "Uso um estetoscópio",
      d_4: "Uso um jaleco",
    },
  },
  {
    nome: "carolina",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-detective-light-skin-tone_1f575-1f3fb-200d-2640-fe0f.png",
    dica: {
      d_1: "Resolvo mistérios",
      d_2: "A lupa é minha parceira",
      d_3: "Tenho uma visão aguçada",
      d_4: "Posso estar observando você agora",
    },
  },
  {
    nome: "luís",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/man-superhero-medium-light-skin-tone_1f9b8-1f3fc-200d-2642-fe0f.png",
    dica: {
      d_1: "Uso um belo uniforme",
      d_2: "As vezes posso voar",
      d_3: "Tenho uma força anormal",
      d_4: "Uso uma máscara",
    },
  },
  {
    nome: "ricardo",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/technologist-medium-dark-skin-tone_1f9d1-1f3fe-200d-1f4bb.png",
    dica: {
      d_1: "Trabalho em casa",
      d_2: "Desenvolvo programas",
      d_3: "Criatividade é meu forte",
      d_4: "O computador é meu melhor amigo",
    },
  },
  {
    nome: "cláudia",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-cook-medium-skin-tone_1f469-1f3fd-200d-1f373.png",
    dica: {
      d_1: "Atendo muitas pessoas",
      d_2: "Meu dia é bastante agitado",
      d_3: "Te conquisto pelo paladar",
      d_4: "Amo cozinhar",
    },
  },
  {
    nome: "emília",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-guard-medium-light-skin-tone_1f482-1f3fc-200d-2640-fe0f.png",
    dica: {
      d_1: "Meu trabalho é internacional",
      d_2: "Meu uniforme é vermelho",
      d_3: "Moro no Reino Unido",
      d_4: "Protejo reis e rainhas",
    },
  },
  {
    nome: "camila",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-police-officer-medium-skin-tone_1f46e-1f3fd-200d-2640-fe0f.png",
    dica: {
      d_1: "Meu trabalho é te proteger",
      d_2: "Uso muitas algemas",
      d_3: "Tenho um quepe",
      d_4: "Se você vacilar, vou te prender",
    },
  },
  {
    nome: "everton",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/man-artist-medium-light-skin-tone_1f468-1f3fc-200d-1f3a8.png",
    dica: {
      d_1: "Arte é minha paixão",
      d_2: "Minha cor favorita é azul",
      d_3: "Mostro meu trabalho em museus",
      d_4: "Uma tela em branco tem muito valor",
    },
  },
  {
    nome: "marcelo",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/man-construction-worker-medium-skin-tone_1f477-1f3fd-200d-2642-fe0f.png",
    dica: {
      d_1: "Construo coisas",
      d_2: "Estou sempre bem protegido",
      d_3: "Me procure em alguma obra",
      d_4: "Você mora em algo que já construi",
    },
  },
  {
    nome: "graziele",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-astronaut-medium-dark-skin-tone_1f469-1f3fe-200d-1f680.png",
    dica: {
      d_1: "Já vi a lua de perto",
      d_2: "Sempre uso um capacete",
      d_3: "Trabalho na gravidade zero",
      d_4: "Meu transporte é um foguete",
    },
  },
  {
    nome: "juliane",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-farmer-medium-dark-skin-tone_1f469-1f3fe-200d-1f33e.png",
    dica: {
      d_1: "Tenho uma fazenda",
      d_2: "Cultivo muitos grãos",
      d_3: "Entendo tudo de plantação",
      d_4: "Vivo no interior",
    },
  },
  {
    nome: "giovana",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-judge-dark-skin-tone_1f469-1f3ff-200d-2696-fe0f.png",
    dica: {
      d_1: "Geralmente me chamam de Vossa excelência",
      d_2: "Uso um malhete",
      d_3: "Posso te punir ou absorver",
      d_4: "Sempre irei te interrogar",
    },
  },
  {
    nome: "jasmin",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-vampire-light-skin-tone_1f9db-1f3fb-200d-2640-fe0f.png",
    dica: {
      d_1: "As vezes posso voar",
      d_2: "Meus dentes são um charme",
      d_3: "Uso uma bela capa",
      d_4: "Trabalho apenas a noite",
    },
  },
  {
    nome: "clarice",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-teacher-medium-light-skin-tone_1f469-1f3fc-200d-1f3eb.png",
    dica: {
      d_1: "Uso óculos",
      d_2: "Adoro ensinar os outros",
      d_3: "Leio bastante",
      d_4: "Trabalho em uma escola",
    },
  },
  {
    nome: "diogo",
    image:
      "https://em-content.zobj.net/source/microsoft-teams/363/pilot-dark-skin-tone_1f9d1-1f3ff-200d-2708-fe0f.png",
    dica: {
      d_1: "Viajo o mundo todo",
      d_2: "Falo dois idiomas",
      d_3: "Piloto algo muito grande",
      d_4: "Aviões são mais seguros que elevador",
    },
  },
];

for (let i = 0; i < persons.length; i++) {
  let person = document.createElement("div");
  person.className = `person-${[i]}`;
  document.querySelector(".board").appendChild(person);

  let image = document.createElement("img");
  image.src = persons[i].image;
  image.id = "p-img";

  let name = document.createElement("span");
  name.className = "p-name";
  name.textContent = persons[i].nome;
  document.querySelector(`.person-${[i]}`).appendChild(image);
  document.querySelector(`.person-${[i]}`).appendChild(name);
}

let randomizePersonNumber = Math.floor(Math.random() * 20);
let getPersonByNumber = persons[randomizePersonNumber].nome;
let getTipsByNumber = persons[randomizePersonNumber].dica;

for (let i = 1; i < 5; i++) {
  let card = document.createElement("div");
  card.className = "card";
  card.onclick = turnCard;
  card.innerHTML = getTipsByNumber[`d_${i}`];
  document.querySelector(".tips").appendChild(card);
}

let attempts = 4;
let canTurn = false;

function turnCard() {
  if (canTurn) {
    this.classList.add("cardTip");
    canTurn = false;
  } else {
    alert("Você não pode virar a carta ainda. Dê um palpite!");
  }
}

const answer = document.querySelector("#answer");
const markPerson = document.querySelectorAll("[class^=person]");
const cardTips = document.querySelectorAll(".card");

answer.addEventListener("keypress", (e) => {
  const answerCapitalize =
    answer.value.charAt(0).toLocaleUpperCase() + answer.value.slice(1);

  if (e.key === "Enter") {
    console.log(answerCapitalize);
    if (answer.value.toLocaleLowerCase() === getPersonByNumber) {
      alert("Você acertou!");
      for (let i = 0; i < cardTips.length; i++) {
        cardTips[i].classList.add("cardTip");
      }
    } else {
      for (let i = 0; i < markPerson.length; i++) {
        if (markPerson[i].outerText === answerCapitalize) {
          markPerson[i].classList.add("no-person");
        }
      }
      attemptsCounter();
      canTurn = true;
      console.log(attempts);
    }
  }
});

function attemptsCounter() {
  if (attempts > 0) {
    attempts--;
  } else {
    alert("Você perdeu!");
    answer.disabled = true;
  }
}

for (let i = 0; i < markPerson.length; i++) {
  markPerson[i].addEventListener("click", () => {
    if (markPerson[i].classList.contains("no-person")) {
      markPerson[i].classList.remove("no-person");
    } else {
      markPerson[i].classList.add("no-person");
    }
  });
}

window.onload = () => {
  alert(`Instruções: COMO JOGAR?
  Você tem 4 tentativas para tentar adivinhar quem é a pessoa, através das dicas nos cartões. Você pode virar um cartão de dica a cada palpite dado. Digite seu palpite no campo, "insira seu palpite aqui".
  
  Você também pode marcar as pessoas que você acha que não é, basta clicar com o mouse sobre a pessoa que você deseja marcar.
  
  Boa sorte!
      `);
};