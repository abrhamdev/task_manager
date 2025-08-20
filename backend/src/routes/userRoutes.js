import express from "express";
import {registerUser,login} from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { getUserData } from "../controllers/getUserData.js";
import { getUserProfile } from "../controllers/getUserProfile.js";

const userRouter=express.Router();

userRouter.post("/signup",registerUser);
userRouter.post("/profile",getUserProfile);
userRouter.post("/login",login);
userRouter.post("/userData",authenticate,getUserData);

export default userRouter;