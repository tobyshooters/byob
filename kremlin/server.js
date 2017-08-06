const express    = require('express');
const bodyParser = require('body-parser');
const router     = require('./app/routes');
const db         = require('./app/db.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var port = process.env.PORT || 3000;
router(app, db);

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
