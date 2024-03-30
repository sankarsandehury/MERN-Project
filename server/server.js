require('dotenv').config();
const express =require('express');
var cors = require('cors')
const app=express();
const authRoute=require('./router/auth-router');
const contactRouter=require('./router/contact-router');
const serviceRouter=require("./router/service-router");
const adminRoute=require("./router/admin-router");
const connectDB=require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
app.use(cors(corsOptions));
app.use(express.json());

// route
app.use('/' , authRoute);
app.use('/form' , contactRouter);
app.use('/data',serviceRouter);

// let's define admin router
app.use("/admin",adminRoute)


app.use(errorMiddleware)

connectDB().then(()=>{
    app.listen(5000,()=>{
        console.log(`server running port 5000`);
    });
});

