//Require Express
const express = require('express');

//port on which server will run
const port = 8000;

//Firing the express
const app = express();

//listening to the port on the server is running
app.listen(port, function(err){
    if(err){
        console.log(`Error while running the server : ${err}`);
    }
    console.log(`Server is successfully running on port: ${port}`);
});