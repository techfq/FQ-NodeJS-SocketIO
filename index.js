"use strict";
const PORT = 8080;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.static(__dirname));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// view engine setup
app.set("view engine", "ejs");

var sysStart = new Date().toLocaleString("en-vi");

app.get("/", async (req, res) => {
   const nowStart = new Date().toLocaleString("en-vi");
   res.render("index", { author: "tech.fqs", start: sysStart, now: nowStart });
});

function sendTime() {
   console.log("Send time: " + new Date().toJSON());
   io.emit("time", { time: new Date().toJSON() });
}

io.on("connection", (socket) => {
   console.log("User connect: " + socket.id);
   io.emit;
});

setInterval(sendTime, 5000);

server.listen(PORT, () => console.log(`App listening on port ${PORT}`));
