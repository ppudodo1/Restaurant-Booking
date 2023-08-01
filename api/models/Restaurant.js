import mongoose, { mongo } from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    distance:{
        type:Number,
        required:true
    },
    photos:{
        type:[String]
    },
    title:{
        type:String
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    cheapestPrice:{
        type:Number,
        required:true
    }

});

export default mongoose.model("Restaurant",RestaurantSchema);

