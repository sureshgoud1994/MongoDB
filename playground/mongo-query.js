const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id='5a9f134853362a2d34a44542';

Todo.find({
    _id:id
}).then((todos)=>{
    console.log(todos);
});