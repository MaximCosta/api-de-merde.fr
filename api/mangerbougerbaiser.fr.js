const express = require("express");
const vhost = require("vhost");

module.exports = function (app, domain) {
  const mbb = express(); // mangerbougerbaiser.fr
  app.use(vhost(`les-conneries-de-nathan.${domain}`, mbb));

  mbb.get("/", (req, res) => {
    res.send("Hello World! mbb");
  });

  mbb.get("/random", (req, res) => {
    res.send("Hello World! random");
  });

  mbb.get("/add", (req, res) => {
    res.send("Hello World! add");
  });

  mbb.get("/remove", (req, res) => {
    res.send("Hello World! remove");
  });
};
