function Converter() {
    let valor = parseFloat(document.getElementById("valor").value);
    const converteDe = document.getElementById("converte-de").value;
    const convertePara = document.getElementById("converte-para").value;
    const fixado = parseInt(document.getElementById("casas-decimais").value);

    if(converteDe == convertePara) {
        document.getElementById("valorInicial").innerHTML = `${valor} ${converteDe}`;
        document.getElementById("valorFinal").innerHTML = `${valor} ${convertePara}`;
    } else if(converteDe == "F" && convertePara == "C") {
        let calcula = (valor - 32) / 1.8
        document.getElementById("valorInicial").innerHTML = `${valor} °F`;
        document.getElementById("valorFinal").innerHTML = `${calcula.toFixed(fixado)} °C`;
    } else if(converteDe == "F" && convertePara == "K") {
        let calcula = (valor - 32) * 5/9 + 273.15
        document.getElementById("valorInicial").innerHTML = `${valor} °F`;
        document.getElementById("valorFinal").innerHTML = `${calcula.toFixed(fixado)} K`;
    } else if(converteDe == "C" && convertePara == "F") {
        let calcula = (1.8 * valor) + 32
        document.getElementById("valorInicial").innerHTML = `${valor} °C`;
        document.getElementById("valorFinal").innerHTML = `${calcula.toFixed(fixado)} °F`;
    } else if(converteDe == "C" && convertePara == "K") {
        let calcula = valor + 273.15
        document.getElementById("valorInicial").innerHTML = `${valor} °C`;
        document.getElementById("valorFinal").innerHTML = `${calcula.toFixed(fixado)} K`;
    } else if(converteDe == "K" && convertePara == "C") {
        let calcula = valor - 273.15
        document.getElementById("valorInicial").innerHTML = `${valor} K`;
        document.getElementById("valorFinal").innerHTML = `${calcula.toFixed(fixado)} °C`;
    } else if(converteDe == "K" && convertePara == "F") {
        let calcula = ((valor - 32) * 5) / (9 + 273.15)
        document.getElementById("valorInicial").innerHTML = `${valor} K`;
        document.getElementById("valorFinal").innerHTML = `${calcula.toFixed(fixado)} °F`;
    }
}