const express = require("express");
const mysql = require("mysql");
require("dotenv").config();
const app = express();

const domain = process.env.EXPRESS_ENV === "production" ? "api-de-merde.fr" : "api.local";
const port = process.env.EXPRESS_PORT;

console.log(`Starting server on \t\t${domain}:${port}`);
console.log(`Connect to database on \t\t${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}`);
console.log(`Using database \t\t\t${process.env.MYSQL_DATABASE}`);
console.log(`Using database user \t\t${process.env.MYSQL_USER}`);

var pool = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.MYSQL_HOST,
  user            : process.env.MYSQL_USER,
  password        : process.env.MYSQL_PASSWORD,
  database        : process.env.MYSQL_DATABASE
});

require("./api/les-conneries-de-nathan.fr")(app, domain, pool);
require("./api/mangerbougerbaiser.fr")(app, domain, pool);
require("./api/balance-ton-pote.fr")(app, domain, pool);
require("./api/drogue.me")(app, domain, pool);

app.listen(port, () => {
  console.log(`Example app listening at http://${domain}:${port}`);
});
