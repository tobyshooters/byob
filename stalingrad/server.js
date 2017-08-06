const express    = require('express');
const bodyParser = require('body-parser');
const sqlite3    = require('sqlite3').verbose();
const Sequelize  = require('sequelize');
const router     = require('./app/routes.js');
const db         = require('./app/svalbard/db.js');

const app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

router(app, db);

db.sequelize.sync().then(() => {
  app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });
});
