var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');
// const passport = require('passport');


var email,password;
var schema = new Schema({
    firstName : {type:String,required:true},
    lastName  : {type:String,required:true},
    emailId	  :{type:String,required:true},
})		

// schema.statics.hashPassword = function hashPassword(password)
// {
//     return bcrypt.hashSync(password,10);
// }

// schema.methods.isValid = function(hashPassword)
// {
//     return bcrypt.compareSync(hashedpassword,this.password);
// }

module.exports = mongoose.model('User',schema);