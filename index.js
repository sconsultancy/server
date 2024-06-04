const express = require("express");
const app = express();
const passport = require("passport");
const cookieSession = require("cookie-session");
const cors = require("cors");
const keys = require("./config/keys");
require("./models/User");
const mongoose = require("mongoose");
const session = require("express-session");

// setup session
app.use(
  session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors());

// setup passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI).then(() => {
  console.log("mongo Connected");
});
require("./services/passport");

require("./routes/authRoutes")(app);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// initial google auth login

const PORT = process.env.PORT || 8000;
app.listen(PORT);

// MongoURI = mongodb+srv://sconsultancygroup21:vWYVdEJDVjD0RUQb@cluster-prod.87rvpyq.mongodb.net/cluster-prod?retryWrites=true&w=majority&appName=cluster-prod
// Client ID = 71810379582-4hd4mqp596ngbjv41m1ujma7tng9s3jq.apps.googleusercontent.com
// googleClientSecret = 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
