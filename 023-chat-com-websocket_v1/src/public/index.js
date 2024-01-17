const socket = io();

const message = document.querySelector("#messages");
const input = document.querySelector("#input");

socket.on("message", (texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    message.appendChild(li);
});

document.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input.value) {
        socket.emit("message", `${input.value}`);
        input.value = '';
    };
});