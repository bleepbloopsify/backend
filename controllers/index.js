var exports = module.exports;

exports.get = function(req, res){
  res.json({
    'username':req.user.username,
    'connection':true
  });
};

exports.post = function(req, res){
  res.json({
    'username':req.user.username,
    'connection':true,
    'body': req.body
  });
};

exports.users = require('./users');
