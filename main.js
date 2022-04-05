const pool = require("generic-pool");
const express = require("express");
const mysql = require("mysql");
const app = express();
const domain = process.NODE_ENV === "production" ? "example.com" : "api.local";
const port = 3000;

const connections = pool.createPool(
  {
    create: (done) => {
      return mysql
        .createConnection({
          hostname: "localhost",
          user: "root",
          password: "root",
          database: "api-de-merde",
        })
        .connect(done);
    },
    destroy: (connection) => connection.destroy(),
    validate: (connection) => connection.threadId,
  },
  {
    testOnBorrow: true,
    acquireTimeoutMillis: 10000,
    min: 1,
    max: size,
  }
);

require("./api/les-conneries-de-nathan.fr")(app, domain, connections);
require("./api/mangerbougerbaiser.fr")(app, domain, connections);
require("./api/balance-ton-pote.fr")(app, domain, connections);
require("./api/drogue.me")(app, domain, connections);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
