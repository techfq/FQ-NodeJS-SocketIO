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
const io = new Server(server, { cors: { origin: "*" } });

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
   console.log("Send time: " + new Date().toJSON());
   io.emit("time", { time: new Date().toJSON() });
}

io.on("connection", (socket) => {
   console.log("User connect: " + socket.id);
   io.emit;
});

setInterval(sendTime, 5000);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`App listening on port ${PORT}`));
