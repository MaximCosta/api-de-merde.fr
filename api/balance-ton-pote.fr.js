const express = require("express");
const vhost = require("vhost");

module.exports = function (app, domain, connections) {
  const balance = express(); // balance-ton-pote.fr
  app.use(vhost(`balance-ton-pote.${domain}`, balance));

  balance.get("/", (req, res) => {
    res.send("Hello World! balance");
  });

  balance.get("/random", (req, res) => {
    res.send("Hello World! random");
  });

  balance.get("/add", (req, res) => {
    res.send("Hello World! add");
  });

  balance.get("/remove", (req, res) => {
    res.send("Hello World! remove");
  });
};
