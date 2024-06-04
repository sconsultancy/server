// Keys.js and figutre what credentials to return

if (process.env.NODE_ENV === "production") {
  // We are in production - return the prod set of keys

  module.exports = require("./prod");
} else {
  // we are in development - return the dev keys
  module.exports = require("./dev");
}
