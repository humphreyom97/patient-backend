import { connectDb } from "./config/db.js";
import { setupCronJob } from "./utils/pingServer.js";
import app from "./app.js";

// Connect to MongoDB
connectDb();

// Get port from environment and store in Express.
const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);

  if (process.env.KEEP_SERVER_ALIVE === "true") {
    setupCronJob();
  }
});
