import User from "../models/User.js";


export const getUser = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        throw error;
    }
}

export const getUsers = async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        throw error;
    }
}


