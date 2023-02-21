const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    socket.on('set-data', (data)=>{
        console.log(data)
        io.emit('get-data', data)
    })
})


app.get('/', (req, res)=>{
    res.send('salammm')
})
server.listen(3300, () => {
    console.log("SERVER RUNNING");
});