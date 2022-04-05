const express = require("express");
const vhost = require("vhost");

module.exports = function (app, domain, connections) {
  const nathan = express(); // les-conneries-de-nathan.fr
  app.use(vhost(`les-conneries-de-nathan.${domain}`, nathan));

  nathan.get("/", (req, res) => {
    res.send("Hello World! nathan");
  });

  nathan.get("/random", (req, res) => {
    res.send("Hello World! random");
  });

  nathan.get("/add", (req, res) => {
    res.send("Hello World! add");
  });

  nathan.get("/remove", (req, res) => {
    res.send("Hello World! remove");
  });
};