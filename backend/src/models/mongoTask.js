import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: "Pending" }, // Pending, In Progress, Completed
    priority: { type: String, default: "Medium" }, // Low, Medium, High, Urgent
    category: { type: String },
    dueDate: { type: Date },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

// ---- MODEL FUNCTIONS ---- //

// Get all tasks for a user
export const getData = async (userId) => Task.find({ userId });

// Get tasks by priority
export const getUrgent = async (userId) => Task.find({ userId, priority: "Urgent" });
export const getMedium = async (userId) => Task.find({ userId, priority: "Medium" });
export const getLow = async (userId) => Task.find({ userId, priority: "Low" });
export const getHigh = async (userId) => Task.find({ userId, priority: "High" });

// Get tasks by status
export const getCompleted = async (userId) => Task.find({ userId, status: "Completed" });
export const getPending = async (userId) => Task.find({ userId, status: "Pending" });
export const getInProgress = async (userId) => Task.find({ userId, status: "In Progress" });

// Insert new task
export const insertTask = async (userId, title, description, status, priority, category, dueDate) => {
  const task = new Task({ userId, title, description, status, priority, category, dueDate });
  return task.save();
};

// Delete task by ID
export const deleteTask = async (id) => Task.findByIdAndDelete(id);

// Get single task by ID
export const getTask = async (taskId) => Task.findById(taskId);

// Delete multiple tasks by IDs
export const deleteTasks = async (ids) => Task.deleteMany({ _id: { $in: ids } });

// Search tasks by title
export const search = async (data, userId) => Task.find({ userId, title: { $regex: data, $options: "i" } });

// Update task
export const updateTask = async (taskId, data) => Task.findByIdAndUpdate(taskId, data, { new: true });
