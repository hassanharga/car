let mongoose = require('mongoose'),
    autoincrement=require('mongoose-sequence')(mongoose);

// Schema
let userSchema= new mongoose.Schema({
    u_id:Number,
    name:String,
    image:String,
    email:String,
    phone:[String],
    password:String,
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: 'male'
      },
      person: {
        type: String,
        enum: ['user','vendor','maintenance'],
        default: 'user'
      },
      status :{
          type:String,
          enum:["verified","blocked","unverified"],
          default:"unverified"
      },
      address:{
        city:String,
        street :String,
        building : Number  
      },
    user_name:String,
});
// Autoincrement
userSchema.plugin(autoincrement,{inc_field:'u_id'});
// mapping
module.exports=mongoose.model("users",userSchema,"user");