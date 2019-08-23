/*  by Pisonpeakgroup on 08/18/2019
 */
 
 //modules dependencies
 const mongoose = require('mongoose');
 const express = require('express');

 //creating an express app
 app = express();

 // importing Routes
 const usersRouter = require('./src/routes/users');
 const config = require('./src/config/Config');

 // connect our database
mongoose.connect(config.dbUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected to DataBase!
    console.log("Connected correctly to MongoD Database");
});
app.listen(2020);
console.log('Server running at http://localhost:2020/');


//~Using Routers
app.use('/users', usersRouter);

module.exports = app;
