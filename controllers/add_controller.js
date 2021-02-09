// const todo = require("./mytemparr"); Temporary use of ram before moving to db
// var arr = todo.todo;

//-----------------------Adding the ODM---------------------------------------
const db = require('../configs/mongoose');
//-----------------------adding the schema------------------------------------
const TD = require('../models/todo');

// inserting the data from form
module.exports.todo = function(req, res){
    console.log(req.body);
    // return res.send('<h1>Yeah!! Success</h1>');
    // arr.push(req.body);
    TD.create(req.body, function(err, newTodo){

            if(err){
            console.log('error while creating', newTodo);
            return;
        }
        console.log('********',newTodo);
        return res.redirect('back');
    });
    
}