var express = require('express');
var app = express();

require('./config/modules')(app);

var controllers = require('./controllers');

app.get('/', controllers.get);
app.post('/', controllers.post);


app.use(function(req, res) {
  res.send('api');
});

module.exports = app;
