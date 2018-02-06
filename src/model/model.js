import mongoose  from 'mongoose';

let Schema = mongoose.Schema;

let userSchema =  new Schema({
	name: String,
	sex: String,
	phone: Number,
	password: String,
	age: Number
});

export default mongoose.model('UserModel',userSchema);