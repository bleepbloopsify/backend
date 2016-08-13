var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var assert = require('assert');

var AccountSchema = mongoose.Schema({
  local:{
    email: String, // Email signed up with
    password: String, // Password - applies only after account initialization
  },
  google:{
    id: String, // Gmail id
    token: String, // request token - uses against google oauth api
    name: String, // Full name from google
    emails: [new mongoose.Schema({
      value: {type: String},
      type: {type: String}
    })] // Emails array from google( An account can have several emails )
  },
  facebook:{
  },
  linkedin:{
  }
});

/******************PASSWORD METHODS*************************************/
/* bcrypt work factor - increase if insecure :P */
var SALT_ROUNDS = 10;

/**
 * Hashes a new password and calls back with err or password
 * @param  {String}   password -the new password to hash
 * @param  {Function} callback -err, hash; err if err, hash if no err (hash matches password)
 */
AccountSchema.methods.generateHash = function(password, callback){
  bcrypt.hash(password, SALT_ROUNDS, callback);
};

/**
 * Checks password against hash in db
 * @param  {String}   password -old password to check against hash
 * @param  {Function} callback err, match- match if match :P
 */
AccountSchema.methods.authenticate = function(password, callback){
  bcrypt.compare(password, this.local.password, callback);
};
/**********************LOCAL PASSWORD METHODS DONE*****************************/

var Account = mongoose.model('Account', AccountSchema);
module.exports.Model = Account;
module.exports.Schema = AccountSchema;
