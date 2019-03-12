var mongoose=require("mongoose");
    AutoIncrement = require('mongoose-sequence')(mongoose);
var adminschema=new mongoose.Schema({
    a_id:Number,
    email:{type:String},
    password:String,
    person:{
        type:String,
        default:"admin"
    }
});    

adminschema.plugin(AutoIncrement, {inc_field: 'a_id'});
module.exports=mongoose.model("admin",adminschema);