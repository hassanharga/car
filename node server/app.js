let express=require("express"),
    path=require("path"),
    automaintenance=require("./Routes/automaintenance"),
    vendorRouter = require('./routes/vendor'),
    userRouter = require('./Routes/users'),
    carsRouter = require('./Routes/cars_services'),
     cors = require('cors'),
    partsRouter = require("./Routes/partsService"),
    admin=require("./Routes/admin"),
    rateCarsRouter=require("./Routes/RateCar"),
    ratePartsRouter=require("./Routes/RatePart"),
    complains=require("./Routes/complains"),
    connectflash=require("connect-flash"),
    jwt=require("jsonwebtoken"),
    bodyparser=require("body-parser"),
    adminRouter=require("./Routes/adminRouter"),
    mongoose=require("mongoose");

    mongoose.connect("mongodb://localhost:27017/Cars");
let app=express();
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"Views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended :true
}));//for all request
app.use(connectflash());
app.use(cors());

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
  
  
app.use("/users",userRouter);
app.use("/automaintenance",automaintenance);
app.use("/cars",carsRouter);
app.use("/parts",partsRouter);
app.use('/vendors', vendorRouter);
app.use('/ratecars',rateCarsRouter);
app.use('/rateparts',ratePartsRouter);
app.use('/admins',admin);
app.use('/admin',adminRouter);
app.use("/complains",complains);

let port=process.env.port||8080;
app.listen(port,()=>{
    console.log("server is running.......");
});