// Require the temp array from ram
// var todo = require("./mytemparr");

//-----------------------Adding the ODM---------------------------------------
const db = require('../configs/mongoose');
//-----------------------adding the schema------------------------------------
const TD = require('../models/todo');

//Rendering the home page
module.exports.home = function(req,res){
    //return res.send('<h1>Express Up for CodeToDo</h1>');

    TD.find({}, function(err, allTodo){
        if(err){
            console.log('Error in featching');
            return;
        }

        //rendering the home.ejs file
        return res.render('home', {
            title : 'TODO WebApp',
            // todo : todo.todo
            todo : allTodo
        });
    });
};

