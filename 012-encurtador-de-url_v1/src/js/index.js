const shortenURLButton = document.querySelector(".shorten-url");
const acessLink = document.querySelector(".acess-link");
const emailLink = document.querySelector(".email-link");
const generateQRCode = document.querySelector(".qr-code");
const shareLink = document.querySelector(".share-link");
const copyURL = document.querySelector(".copy-url");
const tinyURL = document.querySelector(".short-url");

//Encurtar link
shortenURLButton.addEventListener("click", () => {
  const longUrl = document.querySelector(".link-url").value;

  if (!longUrl) return;

  fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}/very/long/link.html`)
    .then((response) => response.json())
    .then((json) => {
      tinyURL.value = json.result.short_link;
    });
});
//Acessar link
acessLink.addEventListener("click", () => {
  if (!tinyURL.value) {
    return;
  } else {
    window.location = `https://${tinyURL.value}`;
  }
});
//Copiar link
copyURL.addEventListener("click", () => {
  if (!tinyURL.value) {
    return;
  } else {
    navigator.clipboard.writeText(`https://${tinyURL.value}`);
    const copyMessage = document.querySelector(".url-copied");
    copyMessage.style.display = "flex";

    setTimeout(() => {
      copyMessage.style.display = "none";
    }, 2500);
  }
});
//Compartilhar via gmail
emailLink.addEventListener("click", () => {
  let email = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&body=https://${tinyURL.value}&ui=2&tf=1&pli=1`;

  if (!tinyURL.value) {
    return;
  } else {
    window.open(email, "_blank", "toolbar=0,status=0,width=648,height=395");
  }
});
//Gerar QR Code
generateQRCode.addEventListener("click", () => {
  if (!tinyURL.value) {
    return;
  } else {
    window.open(
      `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=https://${tinyURL.value}`,
      "_blank",
      "toolbar=0,status=0,width=300,height=300"
    );
  }
});
//Share link
let isOpen = false;
shareLink.addEventListener("click", () => {
  const shareOptions = document.querySelector(".share-link-options");
  if (!isOpen) {
    shareOptions.style.display = "flex";
    shareLink.style.borderRadius = "5px 5px 0 0";

    isOpen = true;
  } else {
    shareOptions.style.display = "none";
    shareLink.style.borderRadius = "5px";

    isOpen = false;
  }

  const twitter = document.querySelector(".fa-twitter");
  twitter.addEventListener("click", () => {
    window.open(
      `https://twitter.com/intent/tweet?text=https://${tinyURL.value}`,
      "_blank",
      "toolbar=0,status=0,width=648,height=395"
    );
  });
  const linkedin = document.querySelector(".fa-linkedin");
  linkedin.addEventListener("click", () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=https://${tinyURL.value}`,
      "_blank",
      "toolbar=0,status=0,width=648,height=395"
    );
  });
  const facebook = document.querySelector(".fa-facebook");
  facebook.addEventListener("click", () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=https://${tinyURL.value}`,
      "_blank",
      "toolbar=0,status=0,width=648,height=395"
    );
  });
  const whatsapp = document.querySelector(".fa-whatsapp");
  whatsapp.addEventListener("click", () => {
    window.open(
      `whatsapp://send?text=https://${tinyURL.value}`,
      "_blank",
      "toolbar=0,status=0,width=648,height=395"
    );
  });
});