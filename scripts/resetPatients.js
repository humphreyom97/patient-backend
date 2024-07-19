import axios from "axios";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const apiUrl = process.env.API_BASE_URL;

async function resetPatients() {
  try {
    const response = await axios.post(`${apiUrl}/patients/resetPatients`);
  } catch (error) {
    console.error("Error resetting patients:", error.message);
  }
}

resetPatients();
