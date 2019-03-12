let express = require('express');
 mongoose = require("mongoose"),
 path = require('path'),
 admin=express.Router(),
 fs = require("fs"),
 jwt=require("jsonwebtoken"),
 Admin=require("../Models/AdminModel"),
 path=require("path"),
 fs=require("fs");
 
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
admin.get('/register', (req, res, next)=> {
  res.render("user/adduser")
});

admin.get("/userlist",(req,res)=>{
Admin.find({},(err,result)=>{
  console.log(result);
if(!err){
  res.send("Done");
}
});
});

admin.post("/register",(req,res)=>{
  console.log(req.body);
    let userdata=req.body;
    let user= new Admin(userdata);
        console.log(req.body);
        console.log("before save");
        user.save((err,registereduser)=>{
            if(!err){
              let payload={subject:{a_id:registereduser.a_id,person:registereduser.person},subject2:registereduser.person};
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

admin.get("/login",(req,res)=>{
  res.render("user/login")
})

admin.post("/login",(req,res)=>{
    console.log("admin enter here");
  let userdata=req.body;
  Admin.findOne({email:userdata.email},(err,uservm)=>{
      if(err){
          console.log(err)
      }else{
          console.log(uservm);
          if(!uservm){
              res.status(401).send("invalid Email")
          }else if (uservm.password!==userdata.password){
              res.status(401).send("invalid password")
          }
          else{
            let payload={subject:{a_id:uservm.a_id,person:uservm.person},subject2:uservm.person};
            let token=jwt.sign(payload,"scretkey");
            console.log("from save ")
            res.status(200).send({token,uservm})   
          }
        
      }
  });
});


 module.exports=admin;