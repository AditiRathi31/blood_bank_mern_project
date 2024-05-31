//add packages
const express= require('express');  
const dotenv=require('dotenv');
const colors=require('colors');
const morgan=require('morgan');
const cors=require('cors');
const connectDB = require('./config/db');
 

//dot config -load environemnt variable from .env file
dotenv.config();

//mongoDB connection
connectDB();

//create object for express
const app=express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev')) //print res req details

//routes - for mapping purpose and to navigate between our application 
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

 

//port
const PORT=process.env.PORT || 8080;

//listen
app.listen(PORT,()=>{
    console.log(`node server running in ${process.env.DEV_MODE} Mode on Port ${process.env.PORT}`.bgBlue.white);
});