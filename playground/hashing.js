const{SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');

const bcrypt=require('bcryptjs');


var password='abc234!';

// bcrypt.genSalt(10,(err,salt)=>{

// bcrypt.hash(password,salt,(err,hash)=>{

// console.log(hash);

// });
// }) ;                              // no one can do bruteforce


var haspass='$2a$10$KblcCJibiBqs68.5PyAU5.lV2dR0NswB6jkx/RVTtZ0R5AqsnKd8K';

bcrypt.compare(password,haspass,(err,res)=>{

console.log(res);

})




// var data=
// {
//     id:10
// };


// var token =jwt.sign(data,'abc123');
// console.log(token);



// var decoded=jwt.verify(token,'abc123');
// console.log('decode:---',decoded);






//jwt.sign  // take value object user ID sign create hash and return token value
//jwt.verify   // take token data not manupulate





















































// var message="Hello Aniket User 2";
// var hash=SHA256(message).toString();
// var message1="Aniket";

// console.log(`Message is ${message}`);
// console.log(`Message is ${hash}`);

// var data ={
// id:4
// };

// var token =
// {
// data,
// hash:SHA256(JSON.stringify(data) +'HelloSome').toString()
// }


// // token.data.id=343;
// // token.hash=SHA256(JSON.stringify(token.data)).toString();

// var resultHash=SHA256(JSON.stringify(token.data)+ 'HelloSome').toString();


// if(resultHash === token.hash){

//     console.log('Data not Chanaged');
// }else
// {
//     console.log('Data Chanaged not trusted');
// }

