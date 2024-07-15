// Import necessary modules using ES module syntax
import mongoose from "mongoose";
import dotenv from "dotenv";
import Patient from "./patient.js";

// Load environment variables from .env file
dotenv.config();

// Define the connectDb function
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "patientManagementDB",
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

const models = { Patient };

export { connectDb };

export default models;
