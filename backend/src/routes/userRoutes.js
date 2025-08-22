import express from "express";
import {registerUser,login} from "../controllers/mongoUserController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { getUserData } from "../controllers/mongoGetUserData.js";
import { getUserProfile } from "../controllers/mongoGetUserProfile.js";

const userRouter=express.Router();

userRouter.post("/signup",registerUser);
userRouter.post("/profile",getUserProfile);
userRouter.post("/login",login);
userRouter.post("/userData",authenticate,getUserData);

export default userRouter;