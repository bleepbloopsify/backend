var path = require('path'); // adds paths together
/* Pass the app and configures using UNIQUE FILES FOR EACH SERVER
  This is so we can change the setting on one server without affecting the other
  Some files may be identical - subject to change */
module.exports = function(app) {
  /* No config required
    mongoosejs.com
    This is the mongodb driver - offers a beautiful array of functionality
    Also allows for schema */
  require('mongoose').createConnection(process.env.MONGO_DB_URL || "mongodb://localhost:27017/framework");
  /* Morgan is the logger
    prints errors and stuff to the Terminal
    also has nice colors*/
  require('./morgan')(app);
  /* Body parser parses data and urls sent to the server
  this is so we can accept forms */
  require('./body-parser')(app);
  /* Set static directory for html and images and css and stuff
    THIS MUST BE BEFORE SESSION */
  app.use('/', require('express').static(path.join(__dirname, 'public')));
  /* Session stores data by user and by connection
  We keep things in the mongodb so they dont get lost or stolen */
  require('./express-session')(app);
};
