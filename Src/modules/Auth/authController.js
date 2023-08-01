import userModel from "../../../DB/models/UserModel.js";
import bcrypt from 'bcryptjs'


const signup=async(req,res,nxt)=>{
    const{firstName,lastName,email,password,mobile}=req.body;
    // check user exist on db
    const existUser=await userModel.findOne({email});
    if(existUser) return nxt(new Error("email already exist",{cause:409}));
    // password hashing
    const hashedPassword=bcrypt.hashSync(password,+process.env.SALT_ROUND)
    if(!hashedPassword)return nxt(new Error("fail to hash password",{cause:400}));
     // create user
     const newUser=new userModel({
        firstName,lastName,email,password:hashedPassword,mobile
    })
    const user =await newUser.save();
    // User Response
    user?res.status(201).json({message:"Registeration done",user}): nxt (new Error("fail to added user"),{cause:403});

}


export{
    signup,

}