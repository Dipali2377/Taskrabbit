import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL || "mongodb://127.0.0.1:27017/TaskRabbitDB"
    );
    console.log("Database connected successfully..!");
  } catch (error) {
    console.log("Failed to connect to Database", error);
  }
};

export default connectDB;
