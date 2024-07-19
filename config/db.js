import mongoose from "mongoose";
import dotenv from "dotenv";
import Patient from "../models/patient.js";

// Load environment variables from .env file
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "patientManagementDB",
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    // Exit process with failure
    process.exit(1);
  }
};

const models = { Patient };

export { connectDb };

export default models;
