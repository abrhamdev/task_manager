import bcrypt from "bcryptjs";

const hashService=async (password) => {
   try{
       return bcrypt.hash(password,10);
   }catch(err){
      throw new Error("Failed to register user"+err.message);
   }
};

export default hashService;