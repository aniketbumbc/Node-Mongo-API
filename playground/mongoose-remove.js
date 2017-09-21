const{ObjectID}=require('mongodb');

const{mongoose}=require('./../server/db/mongoose');
const{Todo}=require('./../server/modles/todo');
const{User}=require('./../server/modles/user');

//todo.remove

// Todo.remove({}).then((result) =>{
// console.log(result);
// });

//Todo.findOneAndRemove


Todo.findByIdAndRemove('59c39eca959edda8fe941954').then((todo) =>{
console.log(todo);

})