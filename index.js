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

var sysStart = new Date().toLocaleString("en-vi");

app.get("/", async (req, res) => {
   const nowStart = new Date().toLocaleString("en-vi");
   res.render("index", { author: "tech.fqs", start: sysStart, now: nowStart });
});

io.on("connection", (socket) => {
   console.log("User connect: " + socket.id);
   socket.on("my-room", (data) => {
      console.log("Identifier: " + JSON.stringify(data));
      socket.join(data.address);
   });
});

setInterval(() => {
   io.sockets
      .in("test-id")
      .emit("displayNumber", { address: "benh-vien-quan-y-175", number: ("0000" + Math.floor(Math.random() * 9999)).slice(-4), ID: 1 });
}, 2000);

const firebase = require("./db");
const firestore = firebase.firestore();

const doc = firestore.collection("projects").doc("benh-vien-quan-y-175");
const observer = doc.onSnapshot(
   (docSnapshot) => {
      console.log(`Received doc snapshot: ${JSON.stringify(docSnapshot.data().ESP_NUMBER)}`);
      io.sockets.in("benh-vien-quan-y-175").emit("displayNumber", docSnapshot.data().ESP_NUMBER);
   },
   (err) => {
      console.log(`Encountered error: ${err}`);
   }
);

app.get("/:ID", async (req, res) => {
   try {
      const id = req.params.ID;
      const project = firestore.collection("projects").doc(id);
      const data = await project.get();
      if (!data.exists) {
         res.status(404).send("Project with the given ID not found");
      } else {
         res.send(data.data());
      }
   } catch (error) {
      res.status(400).send(error.message);
   }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`App listening on port ${PORT}`));
