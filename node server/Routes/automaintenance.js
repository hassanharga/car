let express=require("express"),
    automaintenance=express.Router(),
    mongoose=require("mongoose"),
    path=require("path"),
    fs=require("fs"),
    jwt=require("jsonwebtoken"),
    Maintenance=require("../Models/autoMaintenanceModel"),
    multer=require("multer");
    multerMW=multer({  
     dest:path.join(__dirname,"..","publics","images")
   });
 require("../Models/autoMaintenanceModel");
 let auto_maintenanceschema=mongoose.model("auto_maintaince");
 
 
 automaintenance.get("/all",(request,response)=>{
  auto_maintenanceschema.find({},(error,result)=>{
      if(!error)
   response.render("maintenance/all",{speakers:result});
  });
  });
  automaintenance.get("/add",(request,response)=>{
    response.render("maintenance/add");
  });
  
  automaintenance.post("/add"/*,multerMW.single("maintenanceImage")*/,(req,res)=>{      
      //   //fs.rename(request.file.path,path.join(request.file.destination,request.file.originalname),()=>{});
      let speaker= new auto_maintenanceschema({
          name:request.body.name,
          username:request.body.username,
          password:request.body.password,
          email:request.body.email,
          address:{
          city:request.body.city,
          street:request.body.street,
          building:request.body.building,
          },
          phone:request.body.phone,
          //image:request.file.originalname
      });
      console.log("after datat");
      speaker.save((error)=>{
          
          if(!error)
          {
            console.log("from save ")
            response.send("DONE")
              //response.redirect("/automaintenance/all");
              
         }
          else
          {
              console.log(error);
          }
      })
      // console.log(req.body);
      // //fs.rename(req.file.path,path.join(req.file.destination,req.file.originalname),()=>{});
      // let userdata=req.body;
      // let main= new Maintenance(userdata);
      // // let speaker=new userSchema({
      // //     name:req.body.name,
      // //     email:req.body.email,
      // //     phone:req.body.phone,
      // //     password:req.body.password,
      // //     gender:req.body.gender,
      // //     address:req.body.address,
      // //     user_name:req.body.user_name,
      // //    // image:req.file.originalname
      // //     });
      //     console.log(req.body);
      //     console.log("before save");
  
      //     main.save((err,registeredmain)=>{
      //         if(!err){
      //           let payload={subject:registeredmain.m_id};
      //           let token=jwt.sign(payload,"scretkey");
      //           console.log("from save ")
      //          res.status(200).send({token,registeredmain})
      //            // res.redirect("/users/userlist")
      //           }
      //           else
      //           {
      //             console.log(err)
      //           }
    
      //       })  
   });

  automaintenance.get("/edit/:id",(request,response)=>{
    auto_maintenanceschema.findOne({m_id:request.params.id},(error,result)=>{
          response.render("maintenance/edit",{speaker:result})
      });
    });
    automaintenance.post("/edit/:id",multerMW.single("maintenanceImage"),(request,response)=>{
      //fs.name=>old name path and new name id destination ,originalname
      fs.rename(request.file.path,path.join(request.file.destination,request.file.originalname),()=>{});
      auto_maintenanceschema.update({m_id:request.params.id},{
          "$set":{
            name:request.body.name,
            username:request.body.username,
            password:request.body.password,
            email:request.body.email,
            address:{
                city:request.body.city,
                street:request.body.street,
                building:request.body.building,
                },
            phone:request.body.phone,
            image:request.file.originalname
      }
  },(error)=>{
      if(!error)
      {
          response.redirect("/automaintenance/all");
      }
      else
      {
          console.log("postelse"+error);
      }
  })
  });

  automaintenance.get("/delete/:id",(request,response)=>{
    auto_maintenanceschema.deleteOne({m_id:request.params.id},(error)=>{
          if(!error)
          response.redirect("/automaintenance/all");
      })
  });

  module.exports=automaintenance; 