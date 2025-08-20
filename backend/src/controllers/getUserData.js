import { getUserById } from "../models/user.js";

export const getUserData= async (req,res)=>{
    try{  
        const userId=req.userId;
        const users=await getUserById(userId);
        const username=users[0].username;
        return res.status(200).json({username,userId});
    }catch(err){

    }
}