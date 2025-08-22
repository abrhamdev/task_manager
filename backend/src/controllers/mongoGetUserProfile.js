import { checkUser } from "../models/mongoUser.js"; // reuse checkUser function

export const getUserProfile = async (req, res) => {
  try {
    const { userid } = req.body;

    // Find user by ID
    const user = await checkUser(userid);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log(user.email);

    return res.status(200).json({
      email: user.email,
      username: user.username,
      image: user.image || null, // in case image field exists
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Failed to load profile" });
  }
};
