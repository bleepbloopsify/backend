var bodyParser = require('body-parser');

var config = {
  /*DATA FOR POST AND PUT REQUESTS*/
  "json":{
    "inflate":true,/*MAKE IT JSON*/
    "limit":"200kb",/*PARSE SIZE LIMIT*/
    "strict":false,/*DOESNT HAVE TO BE JSON*/
    "type":"application/json"/*ONLY ACCEPTS THIS HEADER*/
  },
  /*DATA FOR ALL REQUESTS*/
  "urlencoded":{
    "extended":false,//No dictionaries in the url please
    "inflate":true,//MAKE IT A JSON
    "limit":"100kb",//SMALL LIMIT
    "type":"application/x-www-form-urlencoded"//DEFAULT FORM FORMAT
  }
};

module.exports = function(app){
  app.use(bodyParser.json(config.json));
  app.use(bodyParser.urlencoded(config.urlencoded));
};
