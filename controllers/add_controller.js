const todo = require("./mytemparr");
var arr = todo.todo;

// inserting the data from form
module.exports.todo = function(req, res){
    // console.log(req.body);
    // return res.send('<h1>Yeah!! Success</h1>');
    
    arr.push(req.body);
    return res.redirect('back');
}