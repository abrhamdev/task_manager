import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticate =(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization token missing or invalid" });
      }

      const token=authHeader.split(" ")[1];
       try{
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.userId=decoded.id;
            next();
       }catch(err){
        console.log("Token verification faild: "+err.message);
        return res.status(403).json({ message: "Invalid or expired token" });
       }
}