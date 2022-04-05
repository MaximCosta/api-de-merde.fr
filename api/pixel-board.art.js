const express = require("express");
const vhost = require("vhost");

module.exports = function (app, domain) {
  const pixel = express(); // pixel-board.art.js
  app.use(vhost(`pixel-board.${domain}`, pixel));

  pixel.get("/", (req, res) => {
    res.send("Hello World! pixel");
  });

  pixel.get("/random", (req, res) => {
    res.send("Hello World! random");
  });

  pixel.get("/add", (req, res) => {
    res.send("Hello World! add");
  });

  pixel.get("/remove", (req, res) => {
    res.send("Hello World! remove");
  });
};
