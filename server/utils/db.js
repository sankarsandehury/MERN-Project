const mongoose=require('mongoose');
// const URL="mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URL);
const URL=process.env.MONGODB_URL;
const connectDB=async()=>{
    try {
        await mongoose.connect(URL);
        console.log('connection successful');
    } catch (error) {
        // console.error('dataabase connection failed');
        console.log(error);
        process.exit(0);
    }
};

module.exports=connectDB;