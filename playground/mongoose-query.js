const{ObjectID}=require('mongodb');

const{mongoose}=require('./../server/db/mongoose');
const{Todo}=require('./../server/modles/todo');
const{User}=require('./../server/modles/user');

var id="59c21f0001a189f01e6a583a";

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

// Todo.findById(id).then((todo)=>{
//     if(!todo){
// return console.log('Id not found in Database');
//     }
// console.log('todo by id',todo);
// }).catch((e)=> console.log(e));


// User.findById(id).then((user)=>{
// if(!user){
//     return console.log('No User Found');
// }
//  console.log(JSON.stringify(user,undefined,2 ));
// },(e)=>{
// console.log(e);
// });


User.findById(id).then((user)=>{
    if(!user){
return console.log('Id not found in Database');
    }
console.log('todo by id',user);
}).catch((e)=> console.log(e));
