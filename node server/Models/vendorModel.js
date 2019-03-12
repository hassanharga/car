let mongoose = require("mongoose"),
    autoincrement=require('mongoose-sequence')(mongoose);


//schema

let vendorSchema = new mongoose.Schema({
    v_id: Number,
    name: String,
    user_name: String,
    password: String,
    email: String,
    logo: String,
    phone: [String],
    address: {type:String},
    status: {
        type: String,
        enum: ["verified", "unverified", "blocked"],
        default: "unverified"
    }
});

//mapping 
vendorSchema.plugin(autoincrement,{inc_field:'v_id'});
mongoose.model("vendors", vendorSchema);
