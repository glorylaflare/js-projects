document.getElementById("calcula").onclick = function () {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);
  
    let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);
    let resultado;
  
    if (media >= 7) {
      resultado = `APROVADO! Sua média foi ${media}`;
    } else {
      resultado = `REPROVADO! Sua média foi ${media}`;
    }
    document.getElementById("resposta").innerHTML = resultado;
  };