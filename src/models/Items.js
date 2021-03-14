  
import mongoose from "mongoose"
// import Users from "./Users";


const itemSchema = new mongoose.Schema({
    title: { type:String, required: true },
    imageUrl:{ type:String, required: true },
    description: {type:String, required: true } ,
   // user: {type:Users, required: true } ,
});



const Item = mongoose.model("itemSchema", itemSchema);
export default Item
