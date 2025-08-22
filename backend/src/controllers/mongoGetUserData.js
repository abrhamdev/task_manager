import { checkUser } from "../models/mongoUser.js"; // we can reuse checkUser as getUserById

export const getUserData = async (req, res) => {
  try {
    const userId = req.userId;

    // Find user by ID
    const user = await checkUser(userId); // we’ll modify checkUser to accept ID too

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const username = user.username;
    return res.status(200).json({ username, userId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to get user data" });
  }
};
