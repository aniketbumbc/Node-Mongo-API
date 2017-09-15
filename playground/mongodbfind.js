const { MongoClient,ObjectID}= require('mongodb'); //destructure of object 
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{ // create database name is TodoApp
if(err)
{
return console.log('Unable to connect to mongodb');
}
console.log('connect to database');

// db.collection('Todos').find({}).toArray().then((docs)=>{

// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));
// },(err)=>
// {
// console.log('unable to find', err);
// });

//db.close();

// db.collection('Todos').find().count().then((count)=>{

// console.log(`Todos counts: ${count}`);
// console.log(JSON.stringify(count,undefined,2));
// },(err)=>
// {
// console.log('unable to find', err);
// });
//db.collection('UserInfo').find({name:"Aniket"}).toArray().then((docs)=>{
db.collection('UserInfo').find({Name:'Aniket'}).toArray().then((docs)=>{
console.log('UserInfo');
console.log(JSON.stringify(docs,undefined,2));
},(err)=>
{
 console.log('unable to find', err);
});

});