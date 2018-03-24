

import express from 'express';
//import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import router from './server/route/index';
import mongoose from 'mongoose';
// import { fail } from 'assert';

let app = express();
console.log('server启动中。。。。。');
// app.get('/',function(req,res){
// 	res.sendFile(path.join(__dirname,'\static\\index.html'));
// });
// express.static('/src');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
mongoose.connect('mongodb://localhost/appvue');

app.all("*", (req, res, next) => {
	res.set("Access-Control-Allow-origin", "http://www.vueapp.tech:8080");
	res.set("Access-Control-Allow-Headers", "Content-Type");
	//res.set("Access-Control-Allow-Methods", "GET,PUT,POST");
	res.set("Access-Control-Allow-Credentials", true);
	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}
	next();
})
app.use((session({
	secret: 'CHRISMA',
	cookie: {
		domain: '.vueapp.tech',
		maxAge: 7200 * 1000,
		secure: false,
		httpOnly:true
	}
})));
router(app);

app.listen(process.env.PORT || 800);
console.log('server正监听800端口，请访问  http://vueapp.tech:800');