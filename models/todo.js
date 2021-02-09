// require library
const mongoose = require('mongoose');

//creating schema
const todoSchema = new mongoose.Schema({
    description: {
        type: 'string',
        required: true
    },
    category: {
        type: 'string'
    },
    date: {
        type: 'date',
        required: true
    }
});

//Giving name to the collection
const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;