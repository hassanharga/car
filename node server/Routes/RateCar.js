let express=require("express"),
RateCarRouter = express.Router();

//path=require("path"),
mongoose=require("mongoose");

//fs=require("fs");
// multer=require("multer");
// multerMW=multer({
//     dest:path.join(__dirname,"..","publics","images")
// });

 require("../Models/Rate_Car");

let carSchema = mongoose.model("rate-cars");

RateCarRouter.get("/list",(request,response)=>{
    carSchema.find({},(error,result)=>{
        console.log(result);
        if(!error)
        response.render("rate/cars",{cars:result});
    })
    
});
//get
RateCarRouter.get("/add",(request,response)=>{
    
    response.render("rate/addcar");
});
//post
RateCarRouter.post("/add",(request,response)=>{
    
    let car=new carSchema({
        u_id:request.body.u_id,
        c_id:request.body.c_id,
        rate:request.body.rate


    });

    car.save((err)=>{


        if(!err)
        {
            // response.send("DONE")
            response.redirect("/ratecars/list");
        }
        else
        {
            console.log(err);
        }
    })

});

RateCarRouter.get("/edit/:id",(request,response)=>{
    carSchema.findOne({cr_id:request.params.id},(error,result)=>{
        response.render("rate/updatecar",{car:result})

    });
});


RateCarRouter.post("/edit/:id",(request,response)=>{
console.log("gggggggggggggggggggg  "+request.body.u_id);
    carSchema.update({cr_id:request.params.id},{
        "$set":{
            u_id:request.body.u_id,
            c_id:request.body.c_id,
            rate:request.body.rate
        }
    },(error)=>{
        if(!error)
        {
            carSchema.findOne({cr_id:request.params.id},()=>{
                response.redirect("/ratecars/list");
            })

        }
        else{
            console.log(error);
        }
    })


});

RateCarRouter.get("/delete/:id",(request,response)=>{
    carSchema.deleteOne({cr_id:request.params.id},(error)=>{
        if(!error)
        response.redirect("/ratecars/list");
    })
});

module.exports=RateCarRouter;
