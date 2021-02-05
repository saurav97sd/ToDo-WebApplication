//module.exports.actionname = function(req,res){}
module.exports.home = function(req,res){
    return res.send('<h1>Express Up for CodeToDo</h1>');
};