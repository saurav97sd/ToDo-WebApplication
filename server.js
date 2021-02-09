//Require Express
const express = require('express');
//port on which server will run
const port = 8000;

//-----------------------Adding the ODM---------------------------------------
const db = require('./configs/mongoose');

//Firing the express
const app = express();

// Parshing data from the form
app.use(express.urlencoded());

// Telling server to access the assets folder to get static files
app.use(express.static('./assets'));

//Set up view engine and show the path to the view folder
app.set('view engine', 'ejs');
app.set('views', './views');

//use express routers
app.use('/', require('./routes'));


//listening to the port on the server is running
app.listen(port, function(err){
    if(err){
        console.log(`Error while running the server : ${err}`);
    }
    console.log(`Server is successfully running on port: ${port}`);
});