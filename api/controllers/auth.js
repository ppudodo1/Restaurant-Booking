import User from "../models/User.js";
import bcrypt  from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req,res)=>{

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash

        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        throw error;
    }
}
export const login = async (req,res)=>{
    try {
        const user = await User.findOne({username:req.body.username});
       
        if(!user){
            res.status(404).send("User not found!");
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);
        if(!isPasswordCorrect){
            res.status(404).send("Inccorect password");
        }
        const token = jwt.sign({id:user._id},process.env.JWT);
        const {password,isAdmin,...otherDetails}= user._doc;
        res.cookie("access_token",token,{httpOnly:true}).status(200).json({...otherDetails});//created successfully
    } catch (error) {
        throw error;
    }


}

