const{ObjectID}=require('mongodb');

const{mongoose}=require('./../server/db/mongoose');
const{Todo}=require('./../server/modles/todo');

var id="59c216db9a94d21c1494c2f6";

if(!ObjectID.isValid(id)){
    console.log('Id not valid');
}

// Todo.find({
// _id:id
// }).then((todos)=>{
// console.log('todos',todos);
// });


// Todo.findOne({
// _id:id
// }).then((todo)=>{
// console.log('todo',todo);
// });

Todo.findById(id).then((todo)=>{
    if(!todo){
return console.log('Id not found in Database');
    }
console.log('todo by id',todo);
}).catch((e)=> console.log(e));