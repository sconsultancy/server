const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/dashboard",
      failureRedirect: "/login",
    })
  );

  app.get("/dashboard", (req, res) => {
    res.send({ Dashboard: "OK" });
  });

  app.get("/api/signup/google", (req, res) => {
    res.redirect("/auth/google");
  });

  app.get("/login", (req, res) => {
    res.send({ Login: "NOW" });
  });
  app.get("/login/success", async (req, res) => {
    // res.send(req.user);
    if (req.user) {
      res.status(200).json({ message: "user logged in", user: req.user });
    } else {
      res.status(400).json({ message: "not authorised" });
    }

    console.log("reqqqq", req.user);
  });

  app.get("/api/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/login");
    });
    // res.send(req.user);
  });
};
