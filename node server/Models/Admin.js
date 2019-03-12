let mongoose=require("mongoose");

let adminschema=new mongoose.Schema({
    _id:Number,
    username:{type:String},
    password:Number
});    


mongoose.model("admin",adminschema);