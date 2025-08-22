import express from "express";
import { List,CreateTask,Delete, GetTask,DeleteTasks, searchTask, UpdateTask } from "../controllers/mongoTaskController.js";
const taskRouter=express.Router();

taskRouter.post("/list",List);
taskRouter.post("/createtask",CreateTask);
taskRouter.post("/delete",Delete);
taskRouter.post("/gettask",GetTask);
taskRouter.post("/delete_tasks",DeleteTasks);
taskRouter.post("/search",searchTask);
taskRouter.post("/updatetask",UpdateTask)

export default taskRouter;