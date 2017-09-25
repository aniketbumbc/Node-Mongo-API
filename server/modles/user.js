const mongoose= require('mongoose');
const validator=require('validator');
const jwt=require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
    
        Email:
        {
            type:String,
            minlength:2,
            trim:true,
            required:true,
            unique :true,
            validate:{
                validator:validator.isEmail,
                message: '{VALUE}  in not valid email'
            }
        },
        password:{
            type:String,
            minlength:5,
            required:true,
        },
        tokens:[{
        
            access:{
                    type:String,
                    required:true
                },
            token:{
                type:String,
                required:true
                }
        }]
        });

        UserSchema.methods.generateAuthToken=function(){

            var user=this;
            var access='auth';
            var token=jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
            
            user.token.push({access,token});

            return user.save().then(()=>{
                return token;
            });

        };




var User=mongoose.model('User',UserSchema);
module.export={User}