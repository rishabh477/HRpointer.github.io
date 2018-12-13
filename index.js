const express=require('express');
const path =require('path');
const bodyparser=require('body-parser');
const mongo =require('mongoose');
const expressSession=require('express-session');
const expressValidator= require('express-validator');
const schema =require('./database')

/*------Database connection----*/
const url="mongodb://localhost:27017/admin";
mongo.connect(url,function (err){
	if(err){
		console.log(err)
	}
	else{
		console.log('connetion estd');
	}
})

var app =express();
	app.use(bodyparser.json());
	app.use('/',express.static(__dirname))
	app.use(bodyparser.urlencoded({extended:true}));

	app.use(expressValidator());
	app.use(expressSession({secret:"raj"}))
	

	app.get('/',function(req,res){
		res.redirect('/login')
	})
	app.get('/login',function(req,res){
		res.sendFile('login.html',{root:path.join(__dirname)})
	})

/*--------------------Form reuqest----------------------*/
	app.post('/users',function(req,res){
		var user= new schema();
		user.userid=req.body.userid;
		user.password=req.body.psw;
		user.save(function(err,result){
			if(err) {console.log(err)}
			else{
					
				}
		});
		res.redirect('/dashboard')
	})
	app.get('/dashboard',function(req,res){
		res.sendFile('HRpointer.html',{root:path.join(__dirname)})
	})	
	app.get('/employee',function(req,res){
		res.sendFile('company.html',{root:path.join(__dirname)})
	})
	app.get('/company',function(req,res){
		res.sendFile('admin.html',{root:path.join(__dirname)})
	})

	app.listen(3000,function(){
		console.log('server listens on port 3000')
	});