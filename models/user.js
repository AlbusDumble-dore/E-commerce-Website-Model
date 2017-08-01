/**
 * Created by albusdumble-dore on 1/8/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    email : {type:String,required : true},
    password : {type : String, required:true}
});

module.exports=mongoose.model('User',userSchema);
