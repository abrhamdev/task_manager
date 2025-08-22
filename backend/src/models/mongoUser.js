import mongoose from "mongoose";

// Define User Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create User model
const User = mongoose.model("User", userSchema);

// Function to check if user exists by email
export const checkUser = async (identifier) => {
  if (mongoose.Types.ObjectId.isValid(identifier)) {
    // identifier is a valid ObjectId → search by _id
    return await User.findById(identifier);
  } else {
    // assume it's an email
    return await User.findOne({ email: identifier });
  }
};

// Function to insert new user
export const insertUser = async (username, email, password) => {
  const newUser = new User({ username, email, password });
  return await newUser.save();
};

export default User;