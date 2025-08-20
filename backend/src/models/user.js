import con from "../config/db.js";

export const insertUser= async (username,email,password)=>{
   try{
     const query="INSERT INTO users (username,email,password) VALUES (?,?,?)";
    con.execute(query,[username,email,password]);
}catch(err){
    throw new Error('Database operation failed: ' + err.message);
}
}

export const checkUser= async (email)=>{
    try{
        
       const query = "SELECT * FROM users WHERE email=?";
       const [rows] = await con.execute(query,[email]);
       return rows;
    }catch(err){
        throw new Error(err.message);
    }
}
export const getUserById=async(userId)=>{
    try{
        const query="SELECT username FROM users WHERE id=?";
        const [user]=await con.execute(query,[userId]);
        return user;
    }catch(err){
        throw new Error(err.message);
    }
}

export const getUser=async(userId)=>{
    try{
        const query="SELECT * FROM users WHERE id=?";
        const [users]=await con.execute(query,[userId]);
        return users;
    }catch(err){
        throw new Error(err.message);
    }
}