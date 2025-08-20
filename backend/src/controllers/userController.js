
import hashService from "../services/hashService.js";
import bcrypt from "bcrypt";
import {checkUser}  from "../models/user.js";
import {generateToken} from "../services/authService.js";
import {insertUser} from "../models/user.js";
import { validatePassword } from "../services/validatePassword.js";
import { validateEmail } from "../services/validateEmail.js";

export const registerUser= async (req ,res)=>{
  try{
    const {username,email,password}=req.body;
    const ispasswordvalid=validatePassword(password);
    const isemailvalid=validateEmail(email);
    if(!isemailvalid.valid){
      return res.status(400).json({message:"Email is not valid"});
    }
    if(!ispasswordvalid.valid){
      const errors=ispasswordvalid.Errors;
      return res.status(400).json({errors});
    }
    
    const isUserExist=checkUser(email);
    if(isUserExist.length>0){
      return res.status(400).json({message:"Email already in use!"});
    }
    const hashedPassword = await hashService(password);
     await insertUser(username,email,hashedPassword);
     
   return res.status(201).json({message:"User Registered Successfully"});
  }catch(erro){
   return res.status(500).json({message: "failed to insert user "});
  }
}

export const login=async(req,res)=>{
  try{
      const {email,password} = req.body;

      const users = await checkUser(email);

      if (users.length === 0){
       return res.status(404).json({message:"User not found!"});
      }
      const user=users[0];
      const username=user.username,userid=user.id;
      
    const isPasswordMatch=await bcrypt.compare(password,user.password);
    if(!isPasswordMatch){
      
     return res.status(400).json({message:"Invalid Credential"});
      
    }
    
    const token = generateToken(user.id);
    
   return res.status(200).json({ message: 'Login successful', token,username,userid});
  }catch(err){
   return res.status(500).json({err:"Failed to login!"});
  }
}
