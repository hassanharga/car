let express=require("express"),
carsRouter=express.Router(),
//path=require("path"),
path=require("path"),
jwt=require("jsonwebtoken"),
fs=require("fs"),
 multer=require("multer"),
 cors = require('cors');

multerMW=multer({
    dest:path.join(__dirname,"..","public","images")
});
mongoose=require("mongoose");
require("../Models/carModel");
require("../Models/buyCarsModel");
let carsSchema = mongoose.model("cars");
let buyCarSchema = mongoose.model("buy_car");




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
carsRouter.get("/list" ,(request,response)=>{
    carsSchema.find({},(error,result)=>{
    
       //response.render("cars/carslist",{cars:result});
       response.send(result);
    });
 });//list
   
    
    
carsRouter.post("/buyCar/:id?",verifyToken,(request,response)=>{
  console.log(request.params.id);
console.log(request.body);
console.log(request.u_id);

let buyCar=new buyCarSchema({
    
     c_id: request.params.id,
     v_id: request.body.v_id,
     u_id: request.u_id,
});

buyCar.save((err)=>{
    console.log("inside save ")
    if(!err)
    {
        console.log("from save ")
        response.send("DONE")
        
    }
   
});

});

//get add
carsRouter.get("/add",(request,response)=>{
       response.render("cars/addcar");
})

//post add
carsRouter.post("/add",(request,response)=>{
   console.log("request");
   console.log(request.body);
 
    let cars=new carsSchema({
         model: request.body.model,
         brand: request.body.brand,
         body: request.body.body,
         fuel: request.body.fuel,
         engin: request.body.engin,
         transmission: request.body.transmission,
         color: request.body.color,
         door: request.body.door,
         warranty: request.body.warranty,
         country: request.body.country,
         price: request.body.price,
         //image: request.file.originalname,
         //v_id:request.u_id
    });
    cars.save((err)=>{
        console.log("inside save ")
        if(!err)
        {
            console.log("from save ")
            response.send("DONE")
            // carsSchema.findOne({p_id:request.body.p_id},(error,result)=>{
            //     if(!error)
            //     response.send(result)
            //     else
            //     response.send(error)
            //     })
            // response.send("DONE")
            // response.redirect("/cars/list");
        }
        // else
        // {
        //    response.send(err);
        // }
    });
  
});


carsRouter.get("/edit/:id",(request,response)=>{

    carsSchema.findOne({c_id:request.params.id},(error,result)=>{

    response.send(result);
//    response.render("cars/editcar", {
//        cars: result
//    });
//    console.log(result);
})
});

carsRouter.post("/edit/:id",multerMW.single("image"),(request,response)=>{
    
     //let newName = request.file.filename + "" + path.extname(request.file.originalname);
     // console.log(newName);
    // fs.rename(request.file.path, path.join(request.file.destination, request.file.originalname), () => {});

    carsSchema.update({c_id:request.params.id},{
        "$set":{
            
            model: request.body.model,
            brand: request.body.brand,
            body: request.body.body,
            fuel: request.body.fuel,
            engin: request.body.engin,
            transmission: request.body.transmission,
            color: request.body.color,
            door: request.body.door,
            warranty: request.body.warranty,
            country: request.body.country,
            price: request.body.price,
            //image: request.file.filename,
            v_id: request.body.v_id
        }

    },(error)=>{
        if(!error)
        {
             carsSchema.findOne({c_id:request.body.c_id},(error,result)=>{

               // response.redirect("/cars/list");
                if(!error)
                response.send(result)
                else
                response.send(error)
                });
        
        }
    })
})


carsRouter.get("/details/:id",(request,response)=>{
    carsSchema.findOne({c_id:request.params.id},(error,result)=>{
        if(!error)
            response.send(result)
        else
            response.send(error);
       
       

    });
})
carsRouter.get("/buyCar",(request,response)=>{
    
     response.send("okkkkk");
  });


carsRouter.post("/buyCar/:id?",verifyToken,(request,response)=>{
    console.log(request.params.id);
  console.log(request.body);
console.log(request.u_id);

let buyCar=new buyCarSchema({
      
       c_id: request.params.id,
       v_id: request.body.v_id,
       u_id: request.u_id,
  });

  buyCar.save((err)=>{
      console.log("inside save ")
      if(!err)
      {
          console.log("from save ")
          response.send("DONE")
          
      }
     
  });

});


carsRouter.post("/search", (request, response) => {
    var obj = request.body;
    console.log(obj);
    console.log(Object.keys(obj).length);
  
    for (var key in obj) {
      if (obj[key] == -1) {
        delete obj[key];
      }
    }
    console.log(obj);
    if (Object.keys(obj).length <= 1) {
      carsSchema.find(obj, (error, result) => {
        response.send(result);
      });
    }
    else {
      carsSchema.find({ $and: [obj] }, (error, result) => {
        response.send(result);
      });
    }
  });
  
carsRouter.get("/delete/:id",(request,response)=>{
    carsSchema.deleteOne({c_id:request.params.id},(error)=>{
        if(!error)
        response.send({data:"deleted"})
        else
        response.send(error);
       // response.redirect("/cars/list");
    })
});


module.exports=carsRouter;