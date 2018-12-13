const express=require('express');
const bodyparser=require('body-parser');
//const mongo =require('mongoose');
//const expressSession=require('express-session');
//const expressValidator= require('express-validator');
var router = express.Router();
const approute =require('./route.js')(router);

/*------Database connection----
const url="mongodb://localhost:27017/admin";
mongo.connect(url,function(err,db){
	if(err){
		console.log(err)
	}
	else{
		console.log('connetion estd');
	}
})
*/
var app =express();
	app.use(bodyparser.json());
	app.use('/',express.static(__dirname))
	app.use(bodyparser.urlencoded({extended:true}));

	//app.use(expressValidator());
	//app.use(expressSession({secret:"raj"}))
	app.use(approute);
	

	app.listen(3000,function(){
		console.log('server listens on port 3000')
	});