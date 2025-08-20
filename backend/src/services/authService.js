import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken=(userId)=>{
  const oneMonth = 30 * 24 * 60 * 60;
  return  jwt.sign({ id:userId },process.env.JWT_SECRET, { expiresIn: oneMonth });
};