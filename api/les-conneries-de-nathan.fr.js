const express = require("express");
const vhost = require("vhost");

module.exports = function (app, domain, pool) {
  const nathan = express(); // les-conneries-de-nathan.fr
  app.use(vhost(`les-conneries-de-nathan.${domain}`, nathan));

  nathan.get("/", (req, res) => {
    res.send("Hello World! nathan");
  });

  nathan.get("/random", (req, res) => {
    pool.query('SELECT * FROM nathan_idea ORDER BY rand() LIMIT 1;', function (error, results, fields) {
      if (error) throw error;
      res.send(results[0].desc)
    });
  });

  nathan.get("/add", (req, res) => {
    res.send("Hello World! add");
  });

  nathan.get("/remove", (req, res) => {
    res.send("Hello World! remove");
  });
};
