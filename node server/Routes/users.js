var express = require('express');
var userRouter = express.Router();
var mongoose=require("mongoose"),
jwt=require("jsonwebtoken"),
User=require("../Models/userModel"),
path=require("path");

fs=require("fs");
multer=require("multer");
multerMW=multer({
    dest:path.join(__dirname,"..","publics","images")
});


  require("../Models/userModel");
  let userSchema=mongoose.model("users");
  

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

  

/* GET users listing. */
userRouter.get('/register', (req, res, next)=> {
  res.render("user/adduser")
});
userRouter.get("/userlist",(req,res)=>{
User.find({},(err,result)=>{
  console.log(result);
if(!err){
  res.send("Done");
  //res.render("user/userlist",{speaker:result})
}
});
});
userRouter.post("/register"/*,multerMW.single("speakerImage")*/,(req,res)=>{
  console.log(req.body);
    //fs.rename(req.file.path,path.join(req.file.destination,req.file.originalname),()=>{});
    let userdata=req.body;
    let user= new User(userdata);
    // let speaker=new userSchema({
    //     name:req.body.name,
    //     email:req.body.email,
    //     phone:req.body.phone,
    //     password:req.body.password,
    //     gender:req.body.gender,
    //     address:req.body.address,
    //     user_name:req.body.user_name,
    //    // image:req.file.originalname
    //     });
        console.log(req.body);
        console.log("before save");

        user.save((err,registereduser)=>{
            if(!err){
              let payload={subject:{u_id:registereduser.u_id,person:registereduser.person},subject2:registereduser.person};
              let token=jwt.sign(payload,"scretkey");
              console.log("from save ")
             res.status(200).send({token,registereduser})
               // res.redirect("/users/userlist")
            }
            else
            {
              console.log(err)
            }

        })

})
userRouter.get("/login",(req,res)=>{
  //res.locals.msg=req.flash("msg");
  res.render("user/login")

})
userRouter.post("/login",(req,res)=>{
  let userdata=req.body;
  User.findOne({email:userdata.email},(err,uservm)=>{
      if(err){
          console.log(err)
      }else{
          if(!uservm){
              res.status(401).send("invalid Email")
          }else if (uservm.password!==userdata.password){
              res.status(401).send("invalid password")
          }
          else if (uservm.status=="unverified" || uservm.status=="blocked")
          {  
            res.status(401).send("Can't Add Car or Part")
          }
          else{
            // let payload={subject:{u_id:registereduser.u_id,person:registereduser.person},subject2:registereduser.person};
            let payload={subject:{u_id:uservm.u_id,person:uservm.person},subject2:uservm.person};
            let token=jwt.sign(payload,"scretkey");
            console.log("from save ")
           res.status(200).send({token,uservm})
          //    res.redirect("/users/userlist")
          }
      }
  })

})
userRouter.get("/detailsvendor/:id",(request,response)=>{
  console.log("enter")
  console.log("id"+request.u_id);
  User.findOne({u_id:request.params.id},(error,result)=>{
    console.log("inside");
      if(!error)
          response.send(result)
      else
          response.send(error);
  });
})
userRouter.get("/detailsuser/:id",(request,response)=>{
  console.log("enteruser")
  User.findOne({u_id:request.params.id},(error,result)=>{
    console.log("insideuser");
      if(!error)
          response.send(result)
      else
          response.send(error);
  });
})


userRouter.get("/detailsmaintenance/:id",(request,response)=>{
  console.log("enter")
  User.findOne({u_id:request.params.id},(error,result)=>{
    console.log("inside");
      if(!error)
          response.send(result)
      else
          response.send(error);
  });
})



// GET Edit users
userRouter.get("/edit/:id",(req,res)=>{
     userSchema.findOne({u_id:req.params.id},(err,result)=>{
       if(!err){
      res.render("user/edituser",{speaker:result });
    }
     })
  }) 
 
 
 userRouter.post("/edit/:id",multerMW.single("speakerImage"),(req,res)=>{
    //fs.rename(req.file.path,path.join(req.file.destination,req.file.originalname),()=>{});
    console.log(req.body);
    User.update({u_id:req.params.id},{
     
        "$set":{
             name: req.body.name,  
             address:{
              city:req.body.address.city,
              street:req.body.address.street,
              building:req.body.address.building,
            },
             user_name:req.body.user_name,
             email:req.body.email,
             password:req.body.password,
             phone:req.body.phone,
      //     image:req.file.originalname
         }
     },(error)=>{
         if(!error)
         {
            res.send("Done");
            // res.redirect("/users/userlist");
         }
     })
 
 })
// Delete user 
 userRouter.get("/delete/:id",(req,res)=>{
     userSchema.deleteOne({u_id:req.params.id},(error)=>{
         if(!error)
         res.redirect("/users/userlist");
     })
 
 })

module.exports = userRouter;
