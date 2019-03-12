let express=require("express"),
    complains=express.Router(),
    mongoose=require("mongoose"),
    path=require("path"),
    fs=require("fs"),
    jwt=require("jsonwebtoken");
    
 require("../Models/complainsModel");
 let complainsschema=mongoose.model("complains");

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
 
 complains.get("/allcomplain",(request,response)=>{
    complainsschema.find({},(error,result)=>{
      console.log("result"+result);
      if(!error)
      response.send(result);
      //response.send("Done")
  });
  }); 
  
  complains.post("/addcomplain",verifyToken,(req,res)=>{      
    console.log(req.person);
      let problem= new complainsschema({
          name:req.body.name,
          subject:req.body.subject,
          message:req.body.message,
          email:req.body.email,
          phone:req.body.phone, 
          type:req.person
      });
      console.log("after datat");
      problem.save((error)=>{
          if(!error)
          {
            console.log("from save ")
            res.send("DONE")     
         }
          else
          {
              console.log(error);
          }
      })
   });

  complains.get("/delete/:id",(request,response)=>{
    complainsschema.deleteOne({com_id:request.params.id},(error)=>{
          if(!error)
          console.log("Delete form complains")
          response.send("Deleted")
      })
  });

  module.exports=complains; 