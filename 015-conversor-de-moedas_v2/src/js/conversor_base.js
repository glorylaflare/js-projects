const converte_de = document.getElementById("converte-de");
const converte_para = document.getElementById("converte-para");
const valor_final = document.getElementById("valor-convertido");
const valor_input = document.querySelector(".valor-input")
const valor_variacao = document.getElementById("valor-variacao")


function verificaInput() {
   if(!valor_input.value) converteValores(1);
   else converteValores(valor_input.value);
}

valor_input.addEventListener("keypress", (e) => {
   if(e.key === 'Enter') verificaInput();
})

function converteValores(number) {
   fetch(`https://economia.awesomeapi.com.br/json/${converte_de.value}-${converte_para.value}`)
      .then((response) => response.json())
      .then((valor) => {
         valor_final.innerHTML = `${number} ${converte_de.value} = ${(number * valor[0].high).toFixed(2)} ${converte_para.value}`
         valor_variacao.innerHTML = `${valor[0].varBid}`
      })
};

converte_de.addEventListener("change", () => {
   const code = converte_de.value
   const img = converte_de.parentElement.querySelector("img");
   img.src = `./src/imgs/${converte_de.value}.png`

   verificaInput();
})

converte_para.addEventListener("change", () => {
   const code = converte_para.value
   const img = converte_para.parentElement.querySelector("img");
   img.src = `./src/imgs/${converte_para.value}.png`

   verificaInput();
})

converteValores(1);