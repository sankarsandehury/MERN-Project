const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

const home = async (req, res) => {
    try {
        res.status(200).send('welocome to home pages')
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: 'email already exists' })
        };

        //has the password
        // const saltRound=10;
        // const hash_password=await bcrypt.hash(password,saltRound);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        });

        res.status(201).json({
            msg: 'registaration successful',
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });

    } catch (error) {
        res.status(500).json('internal server error')
    }
};


const login=async(req,res)=>{
    try {
        const{email,password}=req.body;

        const userExit=await User.findOne({email});
        console.log(userExit);

        if(!userExit){
            return res.status(400).json({message:"Invalid Credentials"});
        };

        // const user=await bcrypt.compare(password,userExit.password);
        const user=await userExit.comparePassword(password);
        
        if(user){
            res.status(200).json({
                msg: 'Login successful',
                token: await userExit.generateToken(),
                userId: userExit._id.toString()
            });
        }else{
            res.status(401).json({message:"Invalid email or password"})
        }
    } catch (error) {
        //  res.status(500).json('internal server error')
        next(error);
    }
}

// user logic
const user = async(req,res)=>{
    try {
        const userData=req.user;
        console.log(userData);
        return res.status(200).json({userData})
    } catch (error) {
        console.log(`error from the user router ${error}`);
    }
}



module.exports = { home, register,login,user};