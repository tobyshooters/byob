const usersRoutes      = require("./users.js"),
const locationsRoutes  = require("./locations.js"),
const challengesRoutes = require("./challenges.js"),

module.exports = function(app, db) {
  app.get('/', (req, res) => {
    console.log("We are live!");
  });

  usersRoutes(app, db);
  locationsRoutes(app, db);
  challengesRoutes(app, db);
};
