const io = require("./server.js");

io.on("connection", (socket) => {
    // console.log("Usuário conectado: " + socket.id);

    socket.on("message", (texto) => {
        io.emit("message", texto);
    });
});