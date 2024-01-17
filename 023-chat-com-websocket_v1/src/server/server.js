const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const port = 3000;

const public = path.join(__dirname, "../", "public");
app.use(express.static(public));

const httpServer = http.createServer(app);
httpServer.listen(port, () => console.log(`Servidor ouvindo na porta http://localhost:${3000}`));

const io = new Server(httpServer);

module.exports = io;