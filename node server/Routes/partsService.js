let express=require("express"),
partsRouter=express.Router(),
//path=require("path"),
path=require("path"),
    
fs=require("fs"),
 multer=require("multer"),

multerMW=multer({
    dest:path.join(__dirname,"..","public","images")
});



mongoose=require("mongoose");
require("../Models/PartsModel");
let PartsSchema=mongoose.model("Parts");
function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null' || token.split(".").length != 3) {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token,"scretkey")
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.u_id = payload.subject
    req.person=payload.subject2
    next()
  }
     
//list 
partsRouter.get("/list",(request,response)=>{
    
    PartsSchema.find({},(error,result)=>{
      // response.render("parts/partslist",{parts:result});
       response.send(result);
    });
 });//list
   
    
    

//get add
partsRouter.get("/add",(request,response)=>{
    
  
       response.render("parts/addpart");

    
})

//post add
partsRouter.post("/add",multerMW.single("image"),(request,response)=>{
   // fs.rename(request.file.path,path.join(request.file.destination,request.file.originalname),()=>{});
   console.log("request");
   console.log(request.body)
    let parts=new PartsSchema({
        category:request.body.category,
        model:request.body.model,
        price:request.body.price,
        brand:request.body.brand,
        code:request.body.code,
        manufactor:request.body.manufactor,
        color:request.body.color,
        quantity:request.body.quantity,
        
        //image:request.file.originalname,
    });

    parts.save((err)=>{
        if(!err)
        {
            // PartsSchema.findOne({p_id:request.body.p_id},(error,result)=>{

            //     if(!error)
            //     response.send(result)
            //     else
            //     response.send(error)
            //     })
         //    response.send("DONE")
            response.redirect("/parts/list");
        }
        else
        {
           response.send(err);
        }
    })

})


partsRouter.get("/details/:id",(request,response)=>{

    console.log("before details..")

    PartsSchema.findOne({p_id:request.params.id},(error,result)=>{

    console.log("after details..")
        
        if(!error)
            response.send(result)
        else
            response.send(error);
       
       

    });
})


partsRouter.get("/edit/:id",(request,response)=>{

    PartsSchema.findOne({p_id:request.params.id},(error,result)=>{
   response.render("parts/editepart",{parts:result});
   console.log(result)
})
});

partsRouter.post("/edit/:id",multerMW.single("image"),(request,response)=>{
    
 //   fs.rename(request.file.path,path.join(request.file.destination,request.file.originalname),()=>{});
  
    PartsSchema.update({p_id:request.params.id},{
        "$set":{
            
            category:request.body.category,
            model:request.body.model,
            price:request.body.price,
            brand:request.body.brand,
            code:request.body.code,
            manufactor:request.body.manufactor,
            color:request.body.color,
            quantity:request.body.quantity,
   //         image:request.file.originalname,
        }

    },(error)=>{
        if(!error)
        {
             PartsSchema.findOne({p_id:request.body.p_id},(error,result)=>{
                 response.send("Done")

               // response.redirect("/parts/list")
                // if(!error)
                // response.send(result)
                // else
                // response.send(error)
                })       
        }
    })
})
partsRouter.get("/delete/:id",(request,response)=>{
    PartsSchema.deleteOne({p_id:request.params.id},(error)=>{
        // if(!error)
        // response.send({data:"deleted"})
        // else
        // response.send(error);
        response.send("delete");
      //  response.redirect("/parts/list");
    })
});


module.exports=partsRouter;