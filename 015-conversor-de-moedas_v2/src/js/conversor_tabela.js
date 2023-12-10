const valores_tabela = document.getElementById("valores-tabela")

let meuValor;

async function cotacao() {
    const response = await fetch(`https://economia.awesomeapi.com.br/json/daily/${converte_de.value}-${converte_para.value}/15`);
    const result =  await response.json()
    filtrarInformacoes(result)
    console.log(result[0]);
}

cotacao();

let valores_cot = [];

function filtrarInformacoes(valores) {

    valores.forEach(function (row) {
        //console.log(row);
        valores_cot.push(row.high);
    })

    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        toolTip:{
            shared:true
        },
        axisX:{
            valueFormatString: "DD",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            crosshair: {
                enabled: true
            }
        },
        legend:{
            cursor:"pointer",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
            type: "line",
            name: "cotação",
            markerType: "none",
            color: "#1d3b53",
            xValueFormatString: "Valor",
            dataPoints: [
	        { x: new Date(0, 0, 1), y: parseFloat(valores_cot[14]) },
	        { x: new Date(0, 0, 2), y: parseFloat(valores_cot[13]) },
	        { x: new Date(0, 0, 3), y: parseFloat(valores_cot[12]) },
	        { x: new Date(0, 0, 4), y: parseFloat(valores_cot[11]) },
	        { x: new Date(0, 0, 6), y: parseFloat(valores_cot[10]) },
			{ x: new Date(0, 0, 8), y: parseFloat(valores_cot[8]) },
			{ x: new Date(0, 0, 9), y: parseFloat(valores_cot[5]) },
			{ x: new Date(0, 0, 11), y: parseFloat(valores_cot[3]) },
			{ x: new Date(0, 0, 13), y: parseFloat(valores_cot[2]) },
			{ x: new Date(0, 0, 15), y: parseFloat(valores_cot[0]), indexLabel: "Última", markerColor: "rgba(255, 221, 34, 0.7)", markerType: "circle"}
            ]
        }]
    });
    chart.render();

    function toogleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }
};

converte_de.addEventListener("change", () => {
    while(valores_cot.length) { valores_cot.pop(); }
    cotacao();
});

converte_para.addEventListener("change", () => {
    while(valores_cot.length) { valores_cot.pop(); }
    cotacao();
});