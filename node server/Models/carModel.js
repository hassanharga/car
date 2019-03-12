var mongoose=require("mongoose");
var AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var carSchema=new mongoose.Schema({
    //_id:  {type:ObjectIdSchema, default: new ObjectId()},
   c_id:Number,
   model:String,
   brand:String,
   body:String,
   fuel:String,
   engin:String,
   transmission:String,
   color:[String],
   door:Number,
   warranty:Number,
   country:String,
   price:Number,
   image:[String],
   v_id:{
       type:Number,
       ref:"vendors"
   }
});
carSchema.plugin(AutoIncrement, {inc_field: 'c_id'});
mongoose.model("cars",carSchema);