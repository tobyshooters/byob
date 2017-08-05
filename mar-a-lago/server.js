const express    = require('express');
const bodyParser = require('body-parser');
const sqlite3    = require('sqlite3').verbose();

let db = new sqlite3.Database('../svalbard/svalbard.db' (err) => {
  if (err) console.error(err.message);
  console.log('Connected to in memory SQlite database.');
});

const app = express();

var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true}));

require('./app/routes.js')(app, {});
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
