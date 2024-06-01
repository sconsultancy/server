const express = require("express");
const keys = require("./config/keys");
const PORT = 5000;
const app = express();
app.get("/", (req, res) => {
  res.send({ hello: `${keys.googleSecret}` });
});
app.listen(PORT, () => {
  console.log("started server here");
});
