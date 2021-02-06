//Require Express
const express = require('express');

//port on which server will run
const port = 8000;

//Firing the express
const app = express();

//Set up view engine and show the path to the view folder
app.set('view engine', 'ejs');
app.set('views', './views');

//use express routers
app.use('/', require('./routes/index'));

//listening to the port on the server is running
app.listen(port, function(err){
    if(err){
        console.log(`Error while running the server : ${err}`);
    }
    console.log(`Server is successfully running on port: ${port}`);
});