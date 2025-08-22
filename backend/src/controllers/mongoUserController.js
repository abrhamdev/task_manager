import hashService from "../services/hashService.js";
import bcrypt from "bcrypt";
import { checkUser, insertUser } from "../models/mongoUser.js";
import { generateToken } from "../services/authService.js";
import { validatePassword } from "../services/validatePassword.js";
import { validateEmail } from "../services/validateEmail.js";

// Register User
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log("username: ", username, " email: ", email, " password: ", password);
    // validations
    const isPasswordValid = validatePassword(password);
    const isEmailValid = validateEmail(email);

    if (!isEmailValid.valid) {
      return res.status(400).json({ message: "Email is not valid" });
    }
    if (!isPasswordValid.valid) {
      return res.status(400).json({ errors: isPasswordValid.Errors });
    }

    // check if user exists
    const isUserExist = await checkUser(email);
    if (isUserExist) {
      return res.status(400).json({ message: "Email already in use!" });
    }

    // hash password and insert
    const hashedPassword = await hashService(password);
    await insertUser(username, email, hashedPassword);

    return res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to insert user" });
  }
};

// Login User
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await checkUser(email);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // check password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Credential" });
    }

    // generate token
    const token = generateToken(user._id);

    return res.status(200).json({
      message: "Login successful",
      token,
      username: user.username,
      userid: user._id,
    });
  } catch (err) {
    return res.status(500).json({ err: "Failed to login!" });
  }
};
