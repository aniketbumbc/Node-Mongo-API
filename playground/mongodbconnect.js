//const MongoClient= require('mongodb').MongoClient;
const { MongoClient,ObjectID}= require('mongodb'); //destructure of object 
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{ // create database name is TodoApp
if(err)
{
return console.log('Unable to connect to mongodb');
}
console.log('connect to database');

// db.collection('Todos').insertOne({          // insert function into database
//     text:'Something is insert into table',
//     completed:'True'
// },(err,result)=>{
// if(err)
// {
//     return console.log('Something wrong while insert',err);
// }
// console.log(JSON.stringify(result.ops,undefined,2));
// });

db.collection('UserInfo').insertOne({
Name:'Aniket',
Age:33,
Location:'Baltimore'
},(err,result) =>{
if(err)
{
    return console.log('Something Goes Wrong in UserInfo Collection',err);
}
console.log(JSON.stringify(result.ops,undefined,2));   //result.ops array of document insert into database
});
db.close();
});