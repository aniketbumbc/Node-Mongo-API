const _= require('lodash');
const bodyParser=require('body-parser'); // take JSON convernt into object 
const express=require('express');
const port=process.env.PORT || 3000;


const{ObjectID}=require('mongodb'); //

var{mongoose}= require('./db/mongoose');
var{Todo}=require('./modles/todo');
var {User}=require('./modles/user');
var {authenticate}=require('./middleware/auth');
var app=express();
//const port=process.env.PORT || 3000;


app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({extended:true}));

//Post todos 

app.post('/todos',authenticate,(req,res)=>{
var todo=new Todo({

    text:req.body.text,
    _creator:req.user.id
});


todo.save().then((doc)=>{
res.send(doc);
},(e)=>{
res.status(400).send(e);
});
});

app.get('/todos',authenticate,(req,res)=>{
Todo.find({
    _creator:req.user._id
}).then((todos)=>{
res.send({todos});
},(e)=>{
res.status(400).send(e);
});
});

app.get('/todos/:id',authenticate,(req,res)=>{
var id =req.params.id;

if(!ObjectID.isValid(id)){
       return res.status(404).send();
 }

 Todo.findOne({
_id:id,
_creator:req.user._id
 }).then((todo)=>{
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

app.delete('/todos/:id',authenticate,(req,res)=>{

var id=req.params.id;
if(!ObjectID.isValid(id)){
       return res.status(404).send();
 }
Todo.findByOneAndRemove({
_id:id,
_creator:req.user._id
}).then((todo)=>{
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

app.patch('/todos/:id',authenticate,(req,res)=>{
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
Todo.findOneAndUpdate({
_id:id,
_creator:req.user._id
},{$set:body},{new:true}).then((todo)=>{
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
        var user=new User(body);
    user.save().then(()=>{
        return user.generateAuthToken();
        //res.send(userd);
    }).then ((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((e)=>{
        res.status(404).send(e);
    });
    });

//private route



// var authenticate=(req,res,next)=>{
//     var token =req.header('x-auth');
//     User.findByToken(token).then((user)=>{
 
//  if(!user)
//  {
//  return Promise.reject();
//  }
// req.user=user;
// req.token=token;

//   }).catch((e)=>{
//      res.status(401).send();
//    });

// };

app.get('/users/me',authenticate,(req,res)=>{
    res.send(req.user);
});



app.post('/users/login',(req,res)=>{
    var body=_.pick(req.body,['email','password']);    
  return  User.findByCredentials(body.email,body.password).then((user)=>{
    return user.generateAuthToken().then((token)=>{
        res.header('x-auth',token).send(user);
        });
    }).catch((e)=>{
        res.status(400).send();
    });
});


app.delete('/users/me/token',authenticate,(req,res)=>{
req.user.removeToken(req.token).then(()=>{
    res.status(200).send();
},()=>{
    res.status(400).send();
});
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
