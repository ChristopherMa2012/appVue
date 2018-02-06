

import express from 'express';
//import path from 'path';
import bodyParser from 'body-parser';
import router from './src/route/index';
import mongoose from 'mongoose';

let app = express();
console.log('server启动中。。。。。');
// app.get('/',function(req,res){
// 	res.sendFile(path.join(__dirname,'\static\\index.html'));
// });
// express.static('/src');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost/800vue');
app.all("*",(req,res,next) =>{
	res.set("Access-Control-Allow-origin","http://res.800vue.com:8080");
	res.set("Access-Control-Allow-Headers","Content-Type");
	res.set("Access-Control-Allow-Credentials",true);
	next();
})
router(app);


app.listen(process.env.PORT || 800);
console.log('server正监听800端口，请访问  http://127.0.0.1:800');