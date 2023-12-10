const seletorTemperatura = document.querySelectorAll("#selector input");
const simboloTemperatura = document.querySelectorAll("#selector p");
const coletarDado = document.querySelectorAll("#set-temperature p");
const inputValorDigitado = document.querySelector("#valor-temperatura");
const circuloExterno = document.querySelector("#outside-circle");
const circuloInterno = document.querySelector("#inside-circle");

let calculo;

inputValorDigitado.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    seletorTemperatura.forEach((e) => {
      coletarDado.forEach((ele) => {
        if (e.checked === true && ele.classList.contains("active")) {
          const getTextContext = ele.textContent.toLowerCase();

          calculaTemperatura(getTextContext, e.id);
        }
      });
    });
  }
});

coletarDado.forEach((e) => {
  e.addEventListener("click", () => {
    if (!e.className) {
      coletarDado.forEach((e) => {
        e.classList.remove("active");
      });
    }
    e.classList.add("active");
  });
});

seletorTemperatura.forEach((e) => {
  e.addEventListener("click", () => {
    seletorTemperatura.forEach((e) => {
      e.checked = false;
    });

    simboloTemperatura.forEach((p) => {
      p.classList.remove("active");
    });

    e.checked = true;
    const element = e.closest("li").querySelector("p");
    if (element) {
      element.classList.add("active");
    }

    mudarCores(e.id);
  });
});

function mudarCores(id) {
  if (id === "celsius") {
    // Circulo Externo
    circuloExterno.style.background =
      "linear-gradient(273deg, rgba(131,250,209,1) 9%, rgba(119,153,255,1) 95%)";
    // Circulo Interno
    circuloInterno.style.background =
      "linear-gradient(180deg, rgba(255,255,255,1) 40%, rgba(155,228,255,1) 95%)";
  } else if (id === "fahrenheit") {
    // Circulo Externo
    circuloExterno.style.background =
      "linear-gradient(241deg, rgba(203,254,84,1) 10%, rgba(112,242,234,1) 95%)";
    // Circulo Interno
    circuloInterno.style.background =
      "linear-gradient(180deg, rgba(255,255,255,1) 40%, rgba(162, 251, 221, 1) 95%)";
  } else if (id === "kelvin") {
    // Circulo Externo
    circuloExterno.style.background =
      "linear-gradient(241deg, rgba(255,157,98,1) 10%, rgba(252,203,53,1) 95%)";
    // Circulo Interno
    circuloInterno.style.background =
      "linear-gradient(180deg, rgba(255,255,255,1) 40%, rgba(254, 195, 129, 1) 95%)";
  }
};

function calculaTemperatura(elemento, id) {
  const valor = parseInt(inputValorDigitado.value);

  if (elemento === "celsius" && id === "fahrenheit") {
    calculo = 1.8 * valor + 32;
    circuloInterno.textContent = `${calculo.toFixed(1)}°`;
  } else if (elemento === "celsius" && id === "kelvin") {
    calculo = valor + 273.15;
    circuloInterno.textContent = `${calculo.toFixed(1)}°`;
  } else if (elemento === "fahrenheit" && id === "celsius") {
    calculo = (valor - 32) / 1.8;
    circuloInterno.textContent = `${calculo.toFixed(1)}°`;
  } else if (elemento === "fahrenheit" && id === "kelvin") {
    calculo = ((valor - 32) * 5) / 9 + 273.15;
    circuloInterno.textContent = `${calculo.toFixed(1)}°`;
  } else if (elemento === "kelvin" && id === "celsius") {
    calculo = valor - 273.15;
    circuloInterno.textContent = `${calculo.toFixed(1)}°`;
  } else if (elemento === "kelvin" && id === "fahrenheit") {
    calculo = ((valor - 32) * 5) / (9 + 273.15);
    circuloInterno.textContent = `${calculo.toFixed(1)}°`;
  } else if (elemento === id) {
    alert("Você está tentando converter medidas iguais.");
  }
};