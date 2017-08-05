const express    = require('express');
const bodyParser = require('body-parser');
const sqlite3    = require('sqlite3').verbose();
const Sequelize  = require('sequelize');

const sequelize = new Sequelize('svalbard', 'user', 'pass', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'svalbard/svalbard.db'
});

const app = express();

var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

require('./app/routes.js')(app, sequelize);
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
