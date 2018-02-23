import mongoose  from 'mongoose';

let Schema = mongoose.Schema;

//用户模型
let user =  new Schema({
	name: String,
	sex: String,
	phone: Number,
	password: String,
	age: Number
});

//收货地址模型
let address = new Schema({
	userId:String,
	name: String,
	phone: String,
	province: String,
	city: String,
	area: String,
	addrDetail: String
})

let model = {
	User: mongoose.model('user',user),
	Address: mongoose.model('address',address)
}
export default model;