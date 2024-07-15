import express from "express";
import cors from "cors";
import { connectDb } from "./models/index.js";
import dotenv from "dotenv";
import routes from "./routes/index.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to MongoDB
connectDb();

// Middleware for parsing JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for CORS
app.use(cors());

// Routes
app.use("/patients", routes.patient);
app.use("/schemas", routes.schema);

// Define a simple route for the root endpoint
app.get("/", (req, res) => {
  res.send("API is running...");
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
