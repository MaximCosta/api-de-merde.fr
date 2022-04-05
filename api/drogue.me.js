const express = require("express");
const vhost = require("vhost");

module.exports = function (app, domain) {
  const drogue = express(); // drogue.me
  app.use(vhost(`drogue.${domain}`, drogue));

  drogue.get("/", (req, res) => {
    res.send("Hello World! drogue");
  });

  drogue.get("/random", (req, res) => {
    res.send("Hello World! random");
  });

  drogue.get("/add", (req, res) => {
    res.send("Hello World! add");
  });

  drogue.get("/remove", (req, res) => {
    res.send("Hello World! remove");
  });
};
