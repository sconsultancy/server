const express = require("express");
const PORT = 5000;
const app = express();
app.get("/", (req, res) => {
  res.send({ hello: "there" });
});
app.listen(PORT, () => {
  console.log("started server here");
});
