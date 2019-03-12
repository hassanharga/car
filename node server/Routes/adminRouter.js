let express = require("express"),
  adminRouter = express.Router(),
  //path=require("path"),
  path = require("path"),

  fs = require("fs"),
  multer = require("multer"),

  multerMW = multer({
    dest: path.join(__dirname, "..", "public", "images")
  });



mongoose = require("mongoose");
require("../Models/userModel");
let userScema = mongoose.model("users");


//Vendors list
adminRouter.get("/VendorList", (request, response) => {

  userScema.find({
        person: "vendor",
        status: "verified"
      }, (error, result) => {
    // response.render("parts/partslist",{parts:result});
    response.send(result);
  });
}); //list

adminRouter.get("/vendorwaitinglist", (request, response) => {

  userScema.find({
    person: "vendor",
    status: "unverified"
  }, (error, result) => {
    // response.render("parts/partslist",{parts:result});
    response.send(result);
  });
}); //list
adminRouter.get("/vendorblockedList", (request, response) => {

  userScema.find({
    person: "vendor",
    status: "blocked"
  }, (error, result) => {
    // response.render("parts/partslist",{parts:result});
    response.send(result);
  });
}); //list


//Vendors list
adminRouter.get("/maintenanceList", (request, response) => {

  userScema.find({
    person: "maintenance",
    status: "verified"
  }, (error, result) => {
    // response.render("parts/partslist",{parts:result});
    response.send(result);
  });
}); //list

adminRouter.get("/maintenancewaitinglist", (request, response) => {

  userScema.find({
    person: "maintenance",
    status: "unverified"
  }, (error, result) => {
    // response.render("parts/partslist",{parts:result});
    response.send(result);
  });
}); //list
adminRouter.get("/maintenanceblockedList", (request, response) => {

  userScema.find({
    person: "maintenance",
    status: "blocked"
  }, (error, result) => {
    // response.render("parts/partslist",{parts:result});
    response.send(result);
  });
}); //list

//Vendor Update
adminRouter.get("/vendorapproved/:id", (req, res) => {
  userScema.update({
    u_id: req.params.id,
  }, {
    "$set": {
      status: "verified"
    }
  }, (error) => {
    if (!error) {
      res.send("Done");
    }
  });
});


adminRouter.get("/vendorblock/:id", (req, res) => {
  userScema.update({
    u_id: req.params.id,
  }, {
    "$set": {
      status: "blocked"
    }
  }, (error) => {
    if (!error) {
      res.send("Done");
    }
  });
});
//Mentainance Update
//Vendor Update
adminRouter.get("/userapproved/:id", (req, res) => {
  userScema.update({
    u_id: req.params.id,
  }, {
    "$set": {
      status: "verified"
    }
  }, (error) => {
    if (!error) {
      res.send("Done");
    }
  });
});


adminRouter.get("/userblock/:id", (req, res) => {
  userScema.update({
    u_id: req.params.id,
  }, {
    "$set": {
      status: "blocked"
    }
  }, (error) => {
    if (!error) {
      res.send("Done");
    }
  });
});
adminRouter.get("/userCount", (request, response) => {

  userScema.find({
    person: "user",
    status: "verified"
  }, (error, result) => {
    // response.render("parts/partslist",{parts:result});
    
    response.send(result);
  });
}); //list

module.exports = adminRouter;
