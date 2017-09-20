var mongoose= require('mongoose');

var User=mongoose.model('User',{
Email:
{
    type:String,
    minlength:2,
    trim:true,
    required:true
}

});


module.export={User};