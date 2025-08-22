import { mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connection=async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error(err);
  }
}
