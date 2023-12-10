const getGame = document.querySelector("#game-name");
const button = document.querySelector("#search-game");
const showGame = document.querySelector(".game-on-screen");

const apiKey = "5b12f22a33104e1eac4776621edb31b0";

button.addEventListener("click", () => {
  const apiURL = `https://api.rawg.io/api/games/${getGame.value
    .replace(/ /g, "-")
    .toLowerCase()}?key=${apiKey}`;

  fetch(apiURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.detail) {
        const notFoundHTML = `
                <div class="error-msg">
                    <h2>Que pena 😓</h2>
                    <p>Nada foi encontrado! Tente novamente.</p>
                </div>
                `;
        showGame.innerHTML = notFoundHTML;
      } else {
        if (data.redirect === true) {
          fetch(`https://api.rawg.io/api/games/${data.slug}?key=${apiKey}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then((resp) => resp.json())
            .then((result) => {
              showGameOnScreen(result);
            });
        } else {
          showGameOnScreen(data);
        }
      }
    })
    .catch((error) => console.log("Houve um error! " + error.message));
});

function showGameOnScreen(game) {
  const showInHTML = `
    <img src="${game.background_image}" alt="${
    game.name
  }"> <!-- background_image -->
    <div class="infos">
    <h1 class="game-name">${game.name}</h1> <!-- name -->
    <span class="developer-name">${
      game.developers[0].name
    }</span> <!-- developers[0].name -->
        <div class="ratings">
            <p class="game-metacritic"> <!-- metacritic -->
                <span>${game.metacritic}</span>
                Critics
            </p> 
            <p class="game-critic"> <!-- rating -->
                <span>${game.rating.toFixed(1)}</span>
                User Rating
            </p> 
        </div>
    <div class="genres"> <!-- genres -->
        <ol class="genres-list"></ol>
    </div>
    <button onclick="addToList('${game.name}', '${
    game.background_image
  }')">Adicionar</button>
    `;
  showGame.innerHTML = showInHTML;

  for (let i = 0; i < game.genres.length; i++) {
    let genresName = document.createElement("li");
    genresName.innerHTML = game.genres[i].name;
    document.querySelector(".genres-list").appendChild(genresName);
  }
}

let gamesList = [];

async function addToList(g_nome, g_img) {
  const addGamesToArray = () => {
    gamesList.push({
      name: `${g_nome}`,
      image: `${g_img}`
    });
  };

  if (gamesList.length < 5) {
    addGamesToArray();
  } else {
    gamesList.shift();
    addGamesToArray();
  }

  showFavList();
}

const favouriteList = document.querySelector("#my-favorite");

function showFavList() {
  favouriteList.innerHTML = "";
  for (let i = 0; i < gamesList.length; i++) {
    const listHTML = `
        <li class="fav-${i}">
            <div class="game-listed">
                <img src="${gamesList[i].image}" alt="${gamesList[i].name}">
                <p>${gamesList[i].name}</p>
            </div>
        </li>
        `;
    favouriteList.innerHTML += listHTML;
  }
}
