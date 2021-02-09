var todo = require("./mytemparr");

//module.exports.actionname = function(req,res){}
module.exports.home = function(req,res){
    //return res.send('<h1>Express Up for CodeToDo</h1>');

    //rendering the home.ejs file
    return res.render('home', {
        title : 'TODO WebApp',
        todo : todo.todo
    });

};

