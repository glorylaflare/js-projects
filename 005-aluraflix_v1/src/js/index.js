let filmesFixos = document.getElementById("filmes-fixos");
let filmesAdicionados = document.getElementById("filmes-adicionados");

//filmes adicionados aos favoritos
let listaFilmesNomes = [];
let listaFilmesImagens = [];

//filmes pré-adicionados
let nomesFilmesFixos = [
  "The Godfather",
  "The Shining",
  "Arrival",
  "The Shawshank Redemption",
  "Spirited Away",
  "The Others",
  "Psycho",
  "CODA",
  "Matrix"
];

let imgsFilmesFixos = [
  "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYzkyNzNiMDItMGU1Yy00NmEyLWE4N2ItMjkzMDZmMmVhNDU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
];

for (i = 0; i < nomesFilmesFixos.length; i++) {
  filmesFixos.innerHTML += `<li id="quadro-filme">
    <img class="imagens-capas" src="${imgsFilmesFixos[i]}">
    <label id="nomes-filmes">${nomesFilmesFixos[i]}</label>
    </li>`;
}

//função buscar e adicionar filmes através do database do Imdb
function adicionarFilme() {
  const api_html = "";
  const nome = document.getElementById("filme").value.toLowerCase();
  const listaCapas = document.getElementById("filmes-adicionados");

  let callBack = nome.split(" ").join("_");
  callBack = callBack.split("-").join("_");
  callBack = callBack.replace(/[^\w\s]|_/g, "_").replace(/\s+/g, "_");
  console.log(callBack);

  jQuery
    .ajax({
      url:
        "https://sg.media-imdb.com/suggests/" +
        callBack.substring(0, 1) +
        "/" +
        callBack +
        ".json",
      dataType: "jsonp",
      cache: true,
      jsonp: false,
      jsonpCallback: "imdb$" + callBack
    })
    .then(function (results) {
      if (!results.d) {
        alert(
          "Filme não encontrado\nSugestão: Tente procurar pelo nome em inglês\nTente procurar pelo nome + ano do filme, exemplo: Avatar 2009"
        );
      } else {
        const image_src = results["d"][0]["i"][0];
        const title = results["d"][0]["l"];

        const elementoCapa = `<li id="quadro-filme">
				<button id="btnDeletar" onClick="deletar()"><img src="https://cdn.pixabay.com/photo/2017/11/10/05/24/trash-2935441_960_720.png"></button>
				<img class="imagens-capas" src="${image_src}">
				<label id="nomes-filmes">${title}</label>
			</li>`;

        listaCapas.innerHTML = listaCapas.innerHTML + elementoCapa;

        listaFilmesNomes.push(title);
        listaFilmesImagens.push(image_src);
      }
    });
}

// função deletar
function deletar() {
  var target = event.currentTarget;
  var li = target.parentElement;
  var ul = li.parentElement;
  var img = li.children[1].src;

  listaFilmesImagens.splice(listaFilmesImagens.indexOf(img), 1);
  ul.removeChild(li);
}
