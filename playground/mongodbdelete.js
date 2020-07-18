const { MongoClient,ObjectID}= require('mongodb'); //destructure of object 
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{ // create database name is TodoApp
if(err)
{
return console.log('Unable to connect to mongodb');
}
console.log('connect to database');
//deletemany,deleteOne, findand deleteOne

//deletemany
// db.collection('Todos').deleteMany({name:'Abhishek'}).then((result)=>{
// console.log(result);
// });

//deleteOne

// db.collection('Todos').deleteOne({name:'Abhishek'}).then((result)=>{
// console.log(result);
// });

//findand DeleteOne

// db.collection('Todos').findOneAndDelete({age:23}).then((result)=>{
// console.log(result);
// })

//delete deletemany and Id

// db.collection('UserInfo').deleteMany({Name:'Aniket'}).then((result)=>{
// console.log(result);
// })

db.collection('UserInfo').findOneAndDelete({_id:new ObjectID ("59bb712981a9561e88cd2ff0")}).then((result)=>{
console.log(result);
})
db.close()
});
