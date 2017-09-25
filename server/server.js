const _= require('lodash');
const bodyParser=require('body-parser'); // take JSON convernt into object 
const express=require('express');
const port=process.env.PORT || 3000;

const{ObjectID}=require('mongodb'); //

var{mongoose}= require('./db/mongoose');
var{Todo}=require('./modles/todo');
var {User}=require('./modles/user');

var app=express();
//const port=process.env.PORT || 3000;


app.use(bodyParser.json());

//Post todos 

app.post('/todos',(req,res)=>{
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

//update resources 

app.patch('/todos/:id',(req,res)=>{
var id=req.params.id;
var body =_.pick(req.body,['name','Done']);

if(!ObjectID.isValid(id)){
       return res.status(404).send();
 }

 if(_.isBoolean(body.Done) && body.Done){

body.DoneAt= new Date().getTime();
 }
 else
 {
    body.Done=false;
    body.DoneAt=null;
 }
Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
if(!todo){

    return res.status(404).send();
}
res.send({todo});
}).catch((e)=>{
 res.status(404).send();
})
});




app.post('/users',(req,res)=>{
    var body=_.pick(req.body,['email','password']);
    //
    // var todo=new Todo({
        
    //         text:req.body.text
    //     });
    var user=new User(body) // Error Here  ??

    user.save().then(()=>{

        return user.generateAuthToken();
        //res.send(userd);
    }).then ((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((e)=>{
        res.status(404).send(e);
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
