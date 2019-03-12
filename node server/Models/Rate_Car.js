let mongoose=require("mongoose");
let AutoIncrement = require('mongoose-sequence')(mongoose);

let carSchema=new mongoose.Schema({
    // _id:  {type:ObjectIdSchema, default: new ObjectId()},
    cr_id:Number,
    u_id: Number, //ref user
    c_id: Number, //ref car
    rate: {
        type:Number,
        enum: [ 1, 2, 3, 4, 5 ],
    }
});

carSchema.plugin(AutoIncrement, {inc_field: 'cr_id'});
//mapping
mongoose.model("rate-cars",carSchema);

