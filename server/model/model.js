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

//商品模型
let goods = new Schema({
    gdSN:Number,
    gdTitle: String,
    gdName:String,
    price: Number,
    originPrice: Number,
    specifications:Array,
    productionPlace:String,
    expires: String,
	component:String,
	goods_type:String,
    imgUrl:String
})
//购物车商品模型
let shopCarGd = new Schema({
	gdSN:Number,
	gdTitle: String,
	specifications: String,
	price:Number,
	num: Number,
	imgUrl:String
})


let model = {
	User: mongoose.model('user',user),
	Address: mongoose.model('address',address),
	Goods: mongoose.model('goods',goods),
	ShopCarGd: mongoose.model('shopCarGd',shopCarGd)
}
export default model;