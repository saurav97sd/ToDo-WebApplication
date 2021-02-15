//-----------------------Adding the ODM---------------------------------------
const db = require('../configs/mongoose');
//-----------------------adding the schema------------------------------------
const TD = require('../models/todo');


module.exports.todo = function(req, res){
    //return res.send('<h1>User Profile</h1>');
    // return res.redirect('back');
    var items= new Array();
    console.log(req.body);
    for(var key in req.body){
        items=req.body[key];
    }
    console.log(items);
    // TD.collection.deleteMany({'_id':{'$in':items}});
    // for(let i of items){
        let id = items;
        TD.findByIdAndDelete(id, function(err){
            if(err){
                console.log('Error');
                return;
            }
        })
    
    return res.redirect('back');
};