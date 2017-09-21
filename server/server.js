var bodyParser=require('body-parser'); // take JSON convernt into object 
var express=require('express');
const port=process.env.PORT || 3000;

const{ObjectID}=require('mongodb'); //

var{mongoose}= require('./db/mongoose');
var{Todo}=require('./modles/todo');
var{User}=require('./modles/user');

var app=express();
//const port=process.env.PORT || 3000;


app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
//console.log(req.body);

var todo=new Todo({

    text:req.body.text
});


todo.save().then((doc)=>{
res.send(doc);
},(e)=>{
res.status(400).send(e);
});
});

app.get('/todos',(req,res)=>{
Todo.find().then((todos)=>{
res.send({todos});
},(e)=>{
res.status(400).send(e);
});
});

app.get('/todos/:id',(req,res)=>{
var id =req.params.id;

if(!ObjectID.isValid(id)){
       return res.status(404).send();
 }

 Todo.findById(id).then((todo)=>{
     if(!todo)
     {
         return res.status(404).send();
     }
 res.send({todo});
 }).catch((e)=>{
res.status(400).send();
})

});

// Delelte by id 

app.delete('/todos/:id',(req,res)=>{

var id=req.params.id;
if(!ObjectID.isValid(id)){
       return res.status(404).send();
 }
Todo.findByIdAndRemove(id).then((todo)=>{
if(!todo)
     {
         return res.status(404).send();
     }
     res.send({todo});
}).catch((e)=>{
res.status(400).send();
})
});








app.listen(port,()=>{
    console.log(`Hello console Serverup ${port}` );
});


module.exports={app};






























































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
