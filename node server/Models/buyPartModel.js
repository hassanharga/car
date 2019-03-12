let mongoose=require("mongoose");
let AutoIncrement=require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;





let buypartSchema=new mongoose.Schema({
    _id: {type:ObjectIdSchema, default: new Object()},
    bp_id:Number,
    m_id:{
        type:Number,
        ref:"auto_maintaince"
    },
    p_id:[{
        type:Number,
        ref:"Parts"
    }],
    u_id:[{
        type:Number,
        ref:"users"
    }],
    color:string,
    time:Date
});



buypartSchema.plugin(AutoIncrement, 'bp_id');
mongoose.model("buy_part",buypartSchema);