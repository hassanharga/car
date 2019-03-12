let express=require("express"),
RatePartRouter = express.Router();

path=require("path"),
mongoose=require("mongoose");

fs=require("fs");
// multer=require("multer");
// multerMW=multer({
//     dest:path.join(__dirname,"..","publics","images")
// });

require("../Models/Rate_Part");

let partSchema =  mongoose.model("rate-parts");

RatePartRouter.get("/list",(request,response)=>{
    
    partSchema.find({},(error,result)=>{
        if(!error){
        response.render("rate/parts",{parts:result});
    }else{
        console.log(error)
    }
    })
});

RatePartRouter.get("/add",(request,response)=>{
    
    response.render("rate/addpart");
});

RatePartRouter.post("/add",(request,response)=>{
    
    let part=new partSchema({
        u_id:request.body.u_id,
        p_id:request.body.p_id,
        rate:request.body.partRate
    });
    

    part.save((err)=>{


        if(!err)
        {
            response.redirect("/rateparts/list");
        }
        else
        {
            console.log(err);
        }
    })

});

RatePartRouter.get("/edit/:id",(request,response)=>{
    partSchema.findOne({pr_id:request.params.id},(error,result)=>{
        console.log(result);
        response.render("rate/updatepart",{part:result})

    });
});

RatePartRouter.post("/edit/:id",(request,response)=>{

    partSchema.update({pr_id:request.params.id},{
        "$set":{
            u_id:request.body.u_id,
            p_id:request.body.p_id,
            rate:request.body.rate
        }
    },(error)=>{
        if(!error)
        {
            partSchema.findOne({pr_id:request.params.id},()=>{
                response.redirect("/rateparts/list");
            })
        }
    })


});

RatePartRouter.get("/delete/:id",(request,response)=>{
    partSchema.deleteOne({pr_id:request.params.id},(error)=>{
        if(!error)
        response.redirect("/rateparts/list");
    })
});

module.exports=RatePartRouter;

