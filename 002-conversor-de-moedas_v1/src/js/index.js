function Converter() {
    let valor = parseFloat(document.getElementById("valor").value);
    const converteDe = document.getElementById("converte-de").value;
    const convertePara = document.getElementById("converte-para").value;
  
    if (converteDe == convertePara) {
      document.getElementById(
        "valorConvertido"
      ).innerHTML = `Você está tentando converter a mesma moeda.`;
    } else {
      if (converteDe == "real" && convertePara == "dolar") {
        resultado = valor * 0.19;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} USD`;
      } else if (converteDe == "real" && convertePara == "euro") {
        resultado = valor * 0.19;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} EUR`;
      } else if (converteDe == "real" && convertePara == "libra") {
        resultado = valor * 0.17;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} GBP`;
      } else if (converteDe == "real" && convertePara == "iene") {
        resultado = valor * 27.8;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} JPY`;
      } else if (converteDe == "real" && convertePara == "peso") {
        resultado = valor * 28.65;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} ARS`;
      } else if (converteDe == "real" && convertePara == "bitcoin") {
        resultado = valor * 0.0000095;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BTC`;
      } else if (converteDe == "dolar" && convertePara == "real") {
        const apiURL = "https://economia.awesomeapi.com.br/last/USD-BRL";
        const request = new XMLHttpRequest();
        request.open("GET", apiURL, false);
        request.send();
        const response = JSON.parse(request.responseText);
        let cotacao = response.USDBRL.bid;
  
        resultado = valor * cotacao;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BRL`;
      } else if (converteDe == "dolar" && convertePara == "euro") {
        resultado = valor * 1.01;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} EUR`;
      } else if (converteDe == "dolar" && convertePara == "libra") {
        resultado = valor * 0.88;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} GBP`;
      } else if (converteDe == "dolar" && convertePara == "iene") {
        resultado = valor * 144.47;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} JPY`;
      } else if (converteDe == "dolar" && convertePara == "peso") {
        resultado = valor * 149.18;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} ARS`;
      } else if (converteDe == "dolar" && convertePara == "bitcoin") {
        resultado = valor * 0.00005;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BTC`;
      } else if (converteDe == "euro" && convertePara == "real") {
        resultado = valor * 5.16;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BRL`;
      } else if (converteDe == "euro" && convertePara == "dolar") {
        resultado = valor * 0.99;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} USD`;
      } else if (converteDe == "euro" && convertePara == "libra") {
        resultado = valor * 0.87;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} GBP`;
      } else if (converteDe == "euro" && convertePara == "iene") {
        resultado = valor * 143.33;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} JPY`;
      } else if (converteDe == "euro" && convertePara == "peso") {
        resultado = valor * 146.6;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} ARS`;
      } else if (converteDe == "euro" && convertePara == "bitcoin") {
        resultado = valor * 0.000049;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BTC`;
      } else if (converteDe == "libra" && convertePara == "real") {
        resultado = valor * 5.91;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BRL`;
      } else if (converteDe == "libra" && convertePara == "dolar") {
        resultado = valor * 1.14;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} USD`;
      } else if (converteDe == "libra" && convertePara == "euro") {
        resultado = valor * 1.15;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} EUR`;
      } else if (converteDe == "libra" && convertePara == "iene") {
        resultado = valor * 164.29;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} JPY`;
      } else if (converteDe == "libra" && convertePara == "peso") {
        resultado = valor * 167.28;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} ARS`;
      } else if (converteDe == "libra" && convertePara == "bitcoin") {
        resultado = valor * 0.000056;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BTC`;
      } else if (converteDe == "iene" && convertePara == "real") {
        resultado = valor * 0.036;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BRL`;
      } else if (converteDe == "iene" && convertePara == "dolar") {
        resultado = valor * 0.0069;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} USD`;
      } else if (converteDe == "iene" && convertePara == "euro") {
        resultado = valor * 0.007;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} EUR`;
      } else if (converteDe == "iene" && convertePara == "libra") {
        resultado = valor * 0.0061;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} GBP`;
      } else if (converteDe == "iene" && convertePara == "peso") {
        resultado = valor * 1.03;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} ARS`;
      } else if (converteDe == "iene" && convertePara == "bitcoin") {
        resultado = valor * 0.0;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BTC`;
      } else if (converteDe == "peso" && convertePara == "real") {
        resultado = valor * 0.035;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BRL`;
      } else if (converteDe == "peso" && convertePara == "dolar") {
        resultado = valor * 0.0067;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} USD`;
      } else if (converteDe == "peso" && convertePara == "euro") {
        resultado = valor * 0.0068;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} EUR`;
      } else if (converteDe == "peso" && convertePara == "libra") {
        resultado = valor * 0.006;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} GBP`;
      } else if (converteDe == "peso" && convertePara == "iene") {
        resultado = valor * 0.97;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} JPY`;
      } else if (converteDe == "peso" && convertePara == "bitcoin") {
        resultado = valor * 0.0;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BTC`;
      } else if (converteDe == "bitcoin" && convertePara == "real") {
        resultado = valor * 104099.45;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BRL`;
      } else if (converteDe == "bitcoin" && convertePara == "dolar") {
        resultado = valor * 19943.0;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} USD`;
      } else if (converteDe == "bitcoin" && convertePara == "euro") {
        resultado = valor * 20296.69;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} EUR`;
      } else if (converteDe == "bitcoin" && convertePara == "libra") {
        resultado = valor * 17784.87;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} GBP`;
      } else if (converteDe == "bitcoin" && convertePara == "iene") {
        resultado = valor * 2888613.92;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} JPY`;
      } else if (converteDe == "bitcoin" && convertePara == "peso") {
        resultado = valor * 2975605.29;
        document.getElementById(
          "valorConvertido"
        ).innerHTML = `${resultado.toFixed(2)} BTC`;
      }
    }
  }
  