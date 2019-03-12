let mongoose=require("mongoose"),
    AutoIncrement = require('mongoose-sequence')(mongoose);

let auto_maintenanceschema=new mongoose.Schema({
  //  _id:  {type:ObjectIdSchema, default: new ObjectId()},
    m_id   :Number,
    name   :String,
    email  :String,
    image  :String,
    phone  :[String],
    address:{
      city:String,
      street:String,
      building:Number
    },
    person: {
      type: String,
      enum: ['vendor','maintenance'],
      default: 'vendor'
    },
    status :{
        type:String,
        enum:["verified","blocked","unverified"],
        default:"unverified"
    },
    username :{type:String},
    password :String
});    
auto_maintenanceschema.plugin(AutoIncrement, {inc_field: 'm_id'});

mongoose.model("auto_maintaince",auto_maintenanceschema);