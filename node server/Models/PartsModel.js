
let mongoose=require("mongoose");
let AutoIncrement = require('mongoose-sequence')(mongoose);


let PartsSchema=new mongoose.Schema({

   // _id:{type:ObjectIdSchema, default: new ObjectId()},
    p_id:{type:Number},    
    category:{type:String},
    model:{type:String},
    price:{type:Number},
    brand:{type:String},
    code:{type:String},
    manufactor:{type:String},
    color:{type:String},
    availability:{
       type:String,
       enum:["available","unavailable"],
       default:"available"
    },
    quantity:{type:Number},    
    image:{type:[String]},
     m_id:[{
        type:Number,
       ref:"auto_maintaince"
     }]
});//Parts Schema



PartsSchema.plugin(AutoIncrement, {inc_field: 'p_id'});


mongoose.model("Parts",PartsSchema);