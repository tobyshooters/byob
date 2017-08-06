const express    = require('express');
const bodyParser = require('body-parser');
const router     = require('./app/routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var Datastore = require('nedb');
var db = {
  users      : new Datastore({ filename: './app/svalbard/users.db',      autoload: true, timestampData: true }),
  challenges : new Datastore({ filename: './app/svalbard/challenges.db', autoload: true, timestampData: true }),
  locations  : new Datastore({ filename: './app/svalbard/locations.db',  autoload: true, timestampData: true })
}

var port = process.env.PORT || 3000;
router(app, db);

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
