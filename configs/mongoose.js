// importimg mongoose
const mongoose = require('mongoose');

// establising connection with mongodb
mongoose.connect('mongodb://localhost/codeToDo_development');

// getting the connection for Checking
const db = mongoose.connection;

//checking the connection
db.on('error', console.error.bind(console, "Error Connecting to MongoDB"));
db.once('open', function(){
    console.log('Yes!! Successfully Connected to MongoDB');
});

// exporting the database
module.exports = db;