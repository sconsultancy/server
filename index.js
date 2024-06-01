const express = require("express");
const app = express();
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
const mongoose = require("mongoose");
mongoose.connect(keys.mongoURI).then(() => {
  console.log("mongo Connected");
});
require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
