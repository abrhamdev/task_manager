import { getUrgent,getData,getMedium,getLow,getHigh,getCompleted,getInProgress,getPending,insertTask,deleteTask,getTask,deleteTasks,search, update } from "../models/task.js";

export const List=async(req,res)=>{
  try{
     const {userid,option}=req.body;
     let tasks;
     switch(option){
        case "All":  tasks=await getData(userid); break;
        case "Urgent": tasks=await getUrgent(userid); break;
        case "Medium":tasks=await getMedium(userid); break;
        case "Low":tasks=await getLow(userid); break;
        case "High":tasks=await getHigh(userid); break;
        case "inProgress":tasks=await getInProgress(userid); break;
        case "completed":tasks=await getCompleted(userid); break;
        case "Pending":tasks=await getPending(userid); break;
     }
     const length=tasks.length;
     return res.status(200).json({tasks,length});
  }catch(err){
    console.log(err);
    return res.status(500).json({erro: "failed to load tasks "});
  }
}

export const CreateTask=async(req,res)=>{
   try{
        const {userId,title,description,status,priority,category,dueDate}=req.body;
        await insertTask(userId,title,description,status,priority,category,dueDate);    
      return res.status(201).json({message:"Task Created Successfully"});

   }catch(err){
    return res.status(500).json({erro: "Failed to create tasks"});
   }
}

export const Delete=async(req,res)=>{
  try{
       const {id}=req.body;
       await deleteTask(id);
       return res.status(200).json({message:`Task ${id} Deleted`})
  }catch(err){
      return res.status(500).json({err});
  }
}
export const GetTask=async(req,res)=>{
  try{ 
        const {taskid}=req.body;
        const tasks=await getTask(taskid);
        const task=tasks[0];
       return res.status(200).json({task});
  }catch(err){
    return res.status(500).json({message:"Error: "+err})
  }
}

export const DeleteTasks=async(req,res)=>{
  try{  
       const {checkedList}=req.body;
       await deleteTasks(checkedList);
    return res.status(200).json({message:"tasks deleted successully"});
  }catch(err){
    return res.status(500).json({err});
  }
}

export const searchTask=async(req,res)=>{
  try{  
       const {searchData,userid}=req.body;
       const result= await search(searchData,userid);
    return res.status(200).json({result});
  }catch(err){
    return res.status(500).json({err});
  }
}

export const UpdateTask=async(req,res)=>{
  try{
      const taskid=req.query.id;
      const {modifiedForm}=req.body;
      if(Object.keys(modifiedForm).length === 0){
       return res.status(400).json({message:"No Field To Update"});
      }
      await update(taskid,modifiedForm);
    return res.status(200).json({message:"Task Updated"});
  }catch(err){
    res.status(400).json({message:"Error "+err});
  }
}