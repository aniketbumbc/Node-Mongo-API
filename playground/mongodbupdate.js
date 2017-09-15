const { MongoClient,ObjectID}= require('mongodb'); //destructure of object 
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{ // create database name is TodoApp
if(err)
{
return console.log('Unable to connect to mongodb');
}
console.log('connect to database');
//db.close();

// db.collection('Todos').findOneAndUpdate({
// _id:new ObjectID("59bbb4030fccd1190dea62f0"),
// },
// {
// $set:{name:"Bolllon"},
// },
// {
//     returnOrignal:false
// })
// .then((result)=>{

//     console.log(result);
// })

db.collection('UserInfo').findOneAndUpdate({
_id:new ObjectID("59bb6fb8f6e29c1da04cf3e1"),
},
{
    $set:{Name:"Leeee"},
    $inc:{Age:+5}
},
{
    returnOrignal:true
}).then ((result)=>{
    console.log(result);
})







});