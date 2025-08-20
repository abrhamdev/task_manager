import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js"
import cors from "cors";

const app=express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/users",userRoutes);
app.use("/api/tasks",taskRoutes);

export default app;