import mongoose, { mongo } from 'mongoose';

let Schema = mongoose.Schema;

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
    imgUrl:String

})

export default mongoose.model('goods',goods);