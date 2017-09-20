var bodyParser=require('body-parser'); // take JSON convernt into object 
var express=require('express');

var{mongoose}= require('./db/mongoose');
var{Todo}=require('./modles/todo');
var{User}=require('./modles/user');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
//console.log(req.body);

var todo=new Todo({

    text:req.body.text,
   // Done:req.body.text,
    //DoneAt:req.body.number
});


todo.save().then((doc)=>{
res.send(doc);
},(e)=>{
res.status(400).send(e);
});
});

app.listen(3000,()=>{
console.log('Start on Port 3000');
});


































































// var OthernewTodo= new Todo({  // that is database value
// text:' Validation Team Cook',
// // Done:true,
// // DoneAt:3445465
// });

// OthernewTodo.save().then((doc)=>{                // model value  Save to Database 
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log('Unable to Save todo')
// });






// var user1= new User(
//     {
// Email:'Bunny@gmail.com'
//     });

// user1.save().then((doc)=>{                // model value  Save to Database 
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log('Unable to Save Email Invalid ')
// });
