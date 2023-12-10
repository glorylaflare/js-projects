const optionValue = document.querySelector("#select-from");
const currencyFlag = document.querySelector("#currency-flag");
const valueToConvert = document.querySelector(".value-to-convert");
const valueConverted = document.querySelector(".value-converted");

const flags = {
  USD: "https://cdn-icons-png.flaticon.com/512/299/299985.png",
  JPY: "https://cdn-icons-png.flaticon.com/512/552/552073.png",
  EUR: "https://cdn-icons-png.flaticon.com/512/552/552084.png",
  GBP: "https://cdn-icons-png.flaticon.com/512/551/551844.png",
  CHF: "https://cdn-icons-png.flaticon.com/512/300/300006.png",
  CAD: "https://cdn-icons-png.flaticon.com/512/299/299968.png",
  ARS: "https://cdn-icons-png.flaticon.com/512/552/552042.png",
  ZAR: "https://cdn-icons-png.flaticon.com/512/300/300011.png",
  CNY: "https://cdn-icons-png.flaticon.com/512/300/300177.png",
  AUD: "https://cdn-icons-png.flaticon.com/512/299/299977.png",
  RUB: "https://cdn-icons-png.flaticon.com/512/551/551878.png"
};

optionValue.addEventListener("change", () => {
  currencyFlag.src = flags[optionValue.value];
});

async function price(api) {
  const response = await fetch(api);
  const result = await response.json();
  showValues(result[`${optionValue.value}BRL`].bid);
}

function showValues(price) {
  const priceIn = (price * valueToConvert.value).toFixed(2);

  valueConverted.innerHTML = priceIn.replace(".", ",");
}

valueToConvert.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const apiURL = `https://economia.awesomeapi.com.br/last/${optionValue.value}-BRL`;
    price(apiURL);
  }
});
