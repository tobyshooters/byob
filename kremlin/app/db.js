var Datastore = require('nedb');
var db = {
  users      : new Datastore({ filename: './app/svalbard/users.db',      autoload: true, timestampData: true }),
  challenges : new Datastore({ filename: './app/svalbard/challenges.db', autoload: true, timestampData: true }),
  locations  : new Datastore({ filename: './app/svalbard/locations.db',  autoload: true, timestampData: true })
}

module.exports = db;
