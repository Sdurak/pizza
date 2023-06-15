//1.importlar
const express = require("express");
const server = express();
require("dotenv").config();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("blabla");
});

//2.middleware

//3.router

//export
module.exports = server;
