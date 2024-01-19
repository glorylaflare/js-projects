const io = require("./server.js");

let clients = {};

io.on("connection", (socket) => {
    // console.log("Usuário conectado: " + socket.id);
    clients[socket.id] = {name: `Anônimo${parseInt(Math.random() * 1000 + 1)}`}

    socket.on("message", (texto) => {
        io.emit("message", 
            `${clients[socket.id].name}: ${texto}`,
        );
    });

    socket.on("disconnect", () => {
        console.log(`Usuário ${clients[socket.id].name} disconnected`);
        delete clients[socket.id];
    });
});