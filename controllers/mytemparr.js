// Creating temporary array to access from html page
module.exports.todo = [
    {
        description: 'Why dont add something ?',
        date: "2nd Feb 2021"
    },
    {
        description: 'Why dont add something ?',
        date: "2nd Feb 2021"
    },
    {
        description: 'Why dont add something ?',
        date: "2nd Feb 2021"
    }
];

module.exports.push2arr = function(val){module.exports.todo.push(val);};