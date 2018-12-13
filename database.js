var mongo =require('mongoose');

var schema = mongo.Schema;

var userSchema = new schema({
	userid: {type:String, unique:true,required:true},
	password:{type:String,required:true}
})

module.exports =mongo.model('Admin',userSchema,'admin');