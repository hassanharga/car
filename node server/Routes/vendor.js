let express = require('express');
mongoose = require("mongoose"),
    path = require('path'),
    fs = require("fs"),
    multer = require("multer"),
    jwt = require("jsonwebtoken"),

    vendorRouter = express.Router();
    User = require("../Models/userModel"),

    require("../models/vendorModel");
require("../Models/buyCarsModel");
require("../Models/carModel");
//require("../Models/userModel");

let vendorSchema = mongoose.model("vendors");
buyCarsModel = mongoose.model("buy_car");
CarsModel = mongoose.model("cars");
//userModel = mongoose.model("users");


multerMW = multer({
    dest: path.join(__dirname, "..", "publics", "images")
})

//list vendors
vendorRouter.get("/list", (req, res) => {
    vendorSchema.find({}, (error, result) => {
        res.render("vendors/list", { vendors: result });

    })
})
//add vendor
vendorRouter.get("/add", (req, res) => {
    //res.render("vandors/add");
    res.render("vendors/add");
})

vendorRouter.post("/add",/*multerMW.single("logo")*/(req, res) => {
    // fs.rename(req.file.path,path.join(req.file.destination,req.file.originalname),()=>{});    
    // if (!req.file) return res.send('Please upload a file');
    let vendor = new vendorSchema({
        name: req.body.name,
        user_name: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
        //    logo:req.file.originalname
    });
    console.log("after datat");
    vendor.save((error) => {
        if (!error) {
            console.log("from save ")
            response.send("DONE")
        }
        else {
            console.log(error);
        }
    })
})
vendorRouter.get("/details/:id", (request, response) => {
    console.log("enter")
    User.findOne({ v_id: request.params.id }, (error, result) => {
        console.log("inside");
        if (!error)
            response.send(result)
        else
            response.send(error);
    });
})

//edit vendor
vendorRouter.get('/edit/:id?', (req, res) => {
    vendorSchema.find({ v_id: req.params.id }, (error, result) => {
        console.log(result);
        res.render("vendors/edit", { vendor: result[0] });
    })
})

vendorRouter.post('/edit/:id?', multerMW.single("logo"), function (req, res) {
    fs.rename(req.file.path, path.join(req.file.destination, req.file.originalname), () => { });


    vendorSchema.update({ v_id: req.params.id }, {
        "$set": {
            name: req.body.name,
            user_name: req.body.username,
            password: req.body.password,
            email: req.body.email,
            phone: req.body.phone,
            address: {
                city: req.body.city,
                street: req.body.street,
                building: req.body.building
            },
            logo: req.file.originalname
        }
    }, (error) => {
        if (!error) {
            res.redirect("/vendors/list/");
        }
        else {
            console.log(error);
        }
    })
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null' || token.split(".").length != 3) {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, "scretkey")
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.u_id = payload.subject
    next()
}

// vendorRouter.get("/orders", verifyToken, (request, response) => {
//     console.log("sssss");
//     let carsOrder = [];
//     let userOrder = [];
//     buyCarsModel.find({ v_id: request.u_id }, (error, result) => {
//         //console.log(result);
//         result.forEach(ele => {
//                 carsOrder.push(CarsModel.find({ c_id: ele.c_id }));
//                 userOrder.push(User.find({ u_id: ele.u_id }))
//         });
//     })
//      console.log(carsOrder);
//         console.log(userOrder);
// })

// vendorRouter.get("/orders", verifyToken, (request, response) => {
//     console.log("sssss");
//     let carsOrder = [];
//     let userOrder = [];
//     let orders = [];

//     buyCarsModel.find({ v_id: request.u_id }, (error, result) => {
//       //  console.log(result[0].bc_id);
//         //console.log(result[1].bc_id);

//         result.forEach(ele => {
//             CarsModel.find({ c_id: ele.c_id }, (error, result2) => {
//                 //console.log(result2);
//                 //carsOrder.push(result2);
//                 //console.log(carsOrder);

//                 result2.forEach((ind,i) => {
//                     User.find({ u_id: ele.u_id }, (error, result3) => {
//                         //console.log(ind);
//                        // userOrder.push(result3);
//                         let order = {carModel:result2[0].model,userName:result3[0].user_name,pNumber:result3[0].phone};
//                         //console.log(order);
//                         //orders={order};
//                         console.log(orders);
                        
//                     })
                   
//                 })

//             })

//         })
//     })
//     //console.log("afteeeeeeer");
//     //console.log(userOrder);

//     // CarsModel.find({c_id:result.c_id},(error,result2)=>{
//     // console.log(result);

//     //     User.find({u_id:result.u_id},(error,result3)=>{
//     //let order = {orderNumber:result.bc_id,carModel:result2[0].model,userName:result3[0].user_name,pNumber:result3[0].phone};
//     //console.log(order);
//     //response.send(order);
//     //         })
//     //     })
//     // })

// })

vendorRouter.get("/orders",verifyToken,(request,response)=>{
    console.log("sssss");
    buyCarsModel.findOne({v_id:request.u_id },(error,result)=>{
        //console.log(result);
        CarsModel.find({c_id:result.c_id},(error,result2)=>{
       // console.log(result2);

            User.find({u_id:result.u_id},(error,result3)=>{
              let order = {orderNumber:result.bc_id,carModel:result2[0].model,userName:result3[0].user_name,pNumber:result3[0].phone};
              console.log(order);
            response.send(order);
            })
        })
    })
})


//delete vendor
vendorRouter.get("/delete/:id?", (req, res) => {
    vendorSchema.deleteOne({ v_id: req.params.id }, (error) => {
        if (!error) {
            res.redirect("/vendors/list");
        }

    })
})

module.exports = vendorRouter;