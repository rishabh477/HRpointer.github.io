var mongo =require('mongoose');
var bcrypt= require('bcrypt')

var schema = mongo.Schema;

var userSchema = new schema({
	userid: {type:String, unique:true,required:true},
	password:{type:String,required:true},
	role:{type:Boolean,default:false,required:true}
})
userSchema.pre('save',function (next) {
	var user=this;
	bcrypt.hash(user.password,10,function (err,hash) {
		if(err) return next(err);
		user.password=hash;	
		next();
	})
})

module.exports =mongo.model('Admin',userSchema,'employee');