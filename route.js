const schema =require('./database');
const mongo =require('mongoose');
const path =require('path');
const User=db.employee;

module.exports= function(router) {

	const url="mongodb://localhost:27017/admin";
	mongo.connect(url,function(err,db){
		if(err){
			console.log(err)
		}
		else{
			console.log('connetion estd' + db.employee);
	}

	router.get('/',function(req,res){
		res.redirect('/login')
	})
	router.get('/login',function(req,res){
		res.sendFile('login.html',{root:path.join(__dirname)})
	})
/*--------------------Form reuqest----------------------*/


	router.post('/users',authenticate)
	/*{
		
		var user= new schema();
		user.userid=req.body.userid;
		user.password=req.body.psw;
		user.save(function(err,result){
			if(err) {console.log(err)}
			else{
			console.log('New user store at admin db')	
			}
		});
	})*/

	async function authenticate({userid,password}){
		var user= new schema();
		const UserId = await User.findOne({userid});
		const password = await bcrypt.compare(password,user.passwordHash);
		if(UserId && passwrod){
			console.log('user and password matched')
		}
	}
		/*
		var adminDB=db.admin();
		function check(){
		var admin=adminDB.getUser('myUserAdmin');
		console.log(admin);
		var comapny=adminDB.getUser('company');
		if(admin.user==req.body.userid && admin.pwd==req.body.psw){
			res.redirect('/company')
		}
		else if(company.user=req.body.userid &&company.pwd==req.body.psw){
			res.redirect('/employee')
		}
		*/
	
	router.get('/dashboard',function(req,res){
		res.sendFile('HRpointer.html',{root:path.join(__dirname)})
	})	
	router.get('/employee',function(req,res){
		res.sendFile('company.html',{root:path.join(__dirname)})
	})
	router.get('/company',function(req,res){
		res.sendFile('admin.html',{root:path.join(__dirname)})
	})
	return router
 }