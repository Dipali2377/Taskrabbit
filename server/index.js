import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.route.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 7000;

app.use(cors());

app.use(express.json());

app.use("/user", userRoutes);

// app.use(
//   cors({
//     origin: "",
//     methods: ["GET", "PUT", "POST", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization", "Cache-Control"],
//     credentials: true,
//   })
// );

app.listen(PORT, async (req, res) => {
  try {
    await connectDB();
    console.log(`Server is running on PORT ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
