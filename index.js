const express = require("express");

const keys = require("./config/keys");

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);
