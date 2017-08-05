const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true}));

require('./app/routes.js')(app, {});
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
