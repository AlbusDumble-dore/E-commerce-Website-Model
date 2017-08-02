/**
 * Created by albusdumble-dore on 1/8/17.
 */
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    email : {type:String,required : true},
    password : {type : String, required:true}
});

userSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password,this.password);            // this refers to current user
}

module.exports=mongoose.model('User',userSchema);
