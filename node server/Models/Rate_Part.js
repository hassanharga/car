let mongoose=require("mongoose");
let AutoIncrement = require('mongoose-sequence')(mongoose);


let partSchema=new mongoose.Schema({
    // _id:  {type:ObjectIdSchema, default: new ObjectId()},
    pr_id:Number,
    u_id: {type:Number}, //ref user
    p_id: {type:Number}, //ref car
    rate: {
        type:Number,
        enum: [ 1, 2, 3, 4, 5 ],
        
    }
});

partSchema.plugin(AutoIncrement, {inc_field: 'pr_id'});
//mapping
mongoose.model("rate-parts",partSchema);

