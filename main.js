const express = require("express");
const vhost = require("vhost");

const app = express();
const domain = process.NODE_ENV === "production" ? "example.com" : "api.local";
const port = 3000;

require("./api/les-conneries-de-nathan.fr")(app, domain);
require("./api/mangerbougerbaiser.fr")(app, domain);
require("./api/balance-ton-pote.fr")(app, domain);
require("./api/drogue.me")(app, domain);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
