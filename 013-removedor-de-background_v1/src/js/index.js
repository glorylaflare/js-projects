let imageURL;

const inputPath = document.getElementById("file-input");
const downloadBtn = document.getElementById("download-button");
const transformBtn = document.getElementById("transform-button");
const originalImage = document.getElementById("original-img");
const transformImage = document.getElementById("transformed-img");
const API_KEY = "6SnWbAGy1XiQs1n3P9Wefc4A";

//Verifica tamanho da imagem (não pode ser maior que 5 MB)
inputPath.onchange = function () {
  if (this.files[0].size > 5242880) {
    //converte 5 mb em bytes (em binário) (https://www.gbmb.org/mb-to-bytes)
    alert("Arquivo grande demais!");
    this.value = "";
  }
  originalImage.src = URL.createObjectURL(inputPath.files[0]);
};

//Função ativa após o click no botão "Transformar"
transformBtn.addEventListener("click", async () => {
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file", inputPath.files[0]);

  //Requisição POST para a API
  try {
    await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      body: formData,
      headers: {
        "X-Api-Key": API_KEY
      }
    })
      .then((response) => {
        if (response.status == 200) return response.blob();
        else
          return console.error("Error:", response.status, response.statusText);
      })
      .then((myBlob) => {
        const url = URL.createObjectURL(myBlob);
        imageURL = url;
        transformImage.src = url;
      });
  } catch (erro) {
    console.error(erro.message);
  }
});

//Função ativa após o click no botão "Download"
downloadBtn.addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = imageURL;
  a.download = "removebg.png";
  document.body.appendChild(a);
  a.click();

  //Avisa que o arquivo foi baixado
  alert("Seu arquivo foi baixado!");
  document.body.removeChild(a);
});
