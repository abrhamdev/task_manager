import { getUser } from "../models/user.js";

export const getUserProfile=async(req,res)=>{
    try{
         const {userid}=req.body;
         const users= await getUser(userid);
        const user = users[0]
        console.log(user.email);
         return res.status(200).json({email:user.email,username:user.username,image:user.image});
    }catch(err){
        console.log(err);
     return res.status(400).json({message: "failed to load profile "});
     
    }
}