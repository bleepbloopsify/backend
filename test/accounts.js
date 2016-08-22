var chai = require('chai');
var should = chai.should();

var mongoose = require('mongoose');
mongoose.connect(process.env.TEST_DB_URL || "mongodb://localhost:27017/framework-testing");
mongoose.Promise = global.Promise;

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

  it('creates a record', function(done){
    newAccount = new Account({
      'local':{
        'email':'hello@hello.com',
      }
    });
    newAccount.save(done);
  });


});
