"use strict";
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*", methods: ["GET", "POST"], transports: ["websocket", "polling"], credentials: true } });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// view engine setup

var sysStart = new Date().toLocaleString("en-vi");

app.get("/", async (req, res) => {
   const nowStart = new Date().toLocaleString("en-vi");
   res.render("index", { author: "tech.fqs", start: sysStart, now: nowStart });
});

function sendTime() {
   const today = new Date();
   const stringDate = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} ${today.getDate()}/${
      today.getMonth() + 1
   }/${today.getFullYear()}`;
   console.log(stringDate);
   io.emit("event_name", stringDate);
}

io.on("connection", (socket) => {
   console.log("User connect: " + socket.id);
   // io.emit;
});
io.on("led-change", function (data) {
   console.log(data);
   socket.broadcast.emit("led-change", data);
});
io.on("event_name", function (data) {
   console.log(data);
   socket.broadcast.emit("led-change", data);
});

setInterval(sendTime, 2000);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`App listening on port ${PORT}`));
