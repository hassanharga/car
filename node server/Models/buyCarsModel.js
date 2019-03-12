let mongoose=require("mongoose");
let AutoIncrement=require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;





var buy_Schema=new mongoose.Schema({
//  _id: {type:ObjectIdSchema, default: new Object()},
    bc_id:Number,
    v_id:{
        type:Number,
      
    },
    c_id:{
        type:Number,
       
    },
    u_id:{
        type:Number,
        
    },
    // color:String,
    // time:Date
});



buy_Schema.plugin(AutoIncrement, {inc_field:'bc_id'});
mongoose.model("buy_car",buy_Schema);