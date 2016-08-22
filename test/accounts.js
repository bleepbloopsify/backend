var chai = require('chai');
var should = chai.should();

var mongoose = require('mongoose');
mongoose.createConnection(process.env.TEST_DB_URL || "mongodb://localhost:27017/framework-testing");

var Account = require('../models/account').Model;

describe('Account Model', function(){
  before(function(done){
    Account.collection.drop();
    done();
  });
  after(function(done){
    Account.collection.drop();
    done();
  });


});
