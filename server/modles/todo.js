var mongoose= require('mongoose');

var Todo= mongoose.model('Todo',{    //Mangooes Model Creation for save database 
text:
{
type:String, 
required:true, // validator
minlength:3,// validator
trim:true// validator  trim before after white spaces 
},
Done:
{
type:Boolean,
default:false
},
DoneAt:
{
type:Number,
default:null
},
_creator:{
type:mongoose.Schema.Types.ObjectId,
required:true
}
});

module.exports={Todo};