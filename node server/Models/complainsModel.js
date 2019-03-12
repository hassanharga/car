let mongoose = require("mongoose");
let AutoIncrement = require("mongoose-sequence")(mongoose);


//schema

let complainsSchema = new mongoose.Schema({
    com_id : Number,
    name   : {type:String},
    phone  :{type:String},
    message: {type:String},
    subject: {type:String},
    email  : {type:String},
    type:{
        type: String,
        enum: ['user','vendor','maintenance'],
        default: 'user'
        }
//    id:Number
});

//mapping 
complainsSchema.plugin(AutoIncrement, { inc_field: "com_id" });
mongoose.model("complains", complainsSchema);
