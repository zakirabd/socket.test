const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{cors: {origin: "*"}});
const cors = require("cors");
app.use(cors())
io.on('connection', (socket) => {
    console.log('a user connected');
});


app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(5000, () => {
  console.log('listening on *:5000');
});