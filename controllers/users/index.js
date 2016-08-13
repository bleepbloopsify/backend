var exports = module.exports;

var Account = require('../../../models/account').Model;

exports.get = function(req, res){
  res.json({
    'users': Account.find(),
    'success':true
  });
};

exports.post = function(req, res){
  var newUser = new Account(req.body);
  newUser.save(function(err){
    return res.json({
      'user': newUser,
      'success': !err
    });
  });
};

exports.put = function(req, res){
  res.json({
    'hi':'hi'
  });
};

exports.patch = function(req, res){
  res.json({
    'hi':'HI'
  });
};

exports.delete = function(req, res){
  res.json({
    'hi':'HI'
  });
};
