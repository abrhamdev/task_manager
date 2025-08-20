import con from "../config/db.js";

export const getData=async(userId)=>{
    try{
       const query="SELECT * FROM tasks WHERE user_id=?";
       const [rows]= await con.execute(query,[userId]);
       return rows;
    }
    catch(err){
        throw new Error(err.message);
    }
}

export const getUrgent= async(userId)=>{
    try{
       const query="SELECT * FROM tasks WHERE user_id=? AND priority=?";
       const [rows]=await con.execute(query,[userId,"Urgent"]);
       return rows;
    }catch(err){
        throw new Error(err.message);
    }
}
export const getMedium= async(userId)=>{
    try{
       const query="SELECT * FROM tasks WHERE user_id=? AND priority=?";
       const [rows]=await con.execute(query,[userId,"Medium"]);
       return rows;
    }catch(err){
        throw new Error(err.message);
    }
}

export const getLow= async(userId)=>{
    try{
       const query="SELECT * FROM tasks WHERE user_id=? AND priority=?";
       const [rows]=await con.execute(query,[userId,"Low"]);
       return rows;
    }catch(err){
        throw new Error(err.message);
    }
}
export const getHigh= async(userId)=>{
    try{
       const query="SELECT * FROM tasks WHERE user_id=? AND priority=?";
       const [rows]=await con.execute(query,[userId,"High"]);
       return rows;
    }catch(err){
        throw new Error(err.message);
    }
}
export const getCompleted= async(userId)=>{
    try{
       const query="SELECT * FROM tasks WHERE user_id=? AND status=?";
       const [rows]=await con.execute(query,[userId,"Completed"]);
       return rows;
    }catch(err){
        throw new Error(err.message);
    }
}

export const getPending= async(userId)=>{
    try{
       const query="SELECT * FROM tasks WHERE user_id=? AND status=?";
       const [rows]=await con.execute(query,[userId,"Pending"]);
       return rows;
    }catch(err){
        throw new Error(err.message);
    }
}
export const getInProgress= async(userId)=>{
    try{
       const query="SELECT * FROM tasks WHERE user_id=? AND status=?";
       const [rows]=await con.execute(query,[userId,"In Progress"]);
       return rows;
    }catch(err){
        throw new Error(err.message);
    }
}

export const insertTask=async(userId,title,description,status,priority,category,dueDate)=>{
    try{
        const query="INSERT INTO tasks (user_id, title, description, status, priority, category, due_date, created_at, updated_at, assigned_to) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), NULL)"
        con.execute(query,[userId,title,description,status,priority,category,dueDate]);
    }catch(err){
        throw new Error(err.message);
    }
}

export const deleteTask=async(id)=>{
    try{
        const query="DELETE FROM tasks WHERE id=?";
        con.execute(query,[id]);
    }catch(err){
        throw new Error(err.message);
    }
}

export const getTask=async(taskid)=>{
    try{
          const query="SELECT * FROM tasks WHERE id=?";
          const [tasks]=await con.execute(query,[taskid]);
          return tasks;
    }catch(err){
        throw new Error(err.message);
    }
}

export const deleteTasks=async(checkedList)=>{
    try{
        const query = `DELETE FROM tasks WHERE id IN (${checkedList.map(() => '?').join(', ')})`;
        con.execute(query,checkedList);
    }catch(err){
        throw new Error(err.message);
    }
}

export const search=async(data,userid)=>{
    try{
        const query="SELECT * FROM tasks WHERE user_id=? AND title LIKE ?";
        const [results]=await con.execute(query,[userid,`%${data}%`]);
        return results;
  }catch(err){
      throw new Error(err.message);
  }
}

export const update=async(taskid,data)=>{
    try{
        const fields = Object.keys(data).map((key)=> `${key}=?`).join(", ");
        const values=Object.values(data);
        values.push(taskid);

        const query=`UPDATE tasks SET ${fields} WHERE id=?`;
        con.execute(query,values);
    }catch(err){
      throw new Error(err.message);
    }
}