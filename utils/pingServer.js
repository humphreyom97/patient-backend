import axios from "axios";
import cron from "node-cron";

function keepServerAlive() {
  const baseUrl = process.env.API_BASE_URL;
  const url = `${baseUrl}/ping`;
  axios
    .get(url)
    .then((response) => {
      console.log("ping successful:", response.data);
    })
    .catch((error) => {
      console.error("Error during keep-alive ping:", error);
    });
}

function setupCronJob() {
  // Schedule the cron job to run every 14 minutes from 8 AM to 8 PM, Monday to Friday
  cron.schedule(
    "*/14 8-19 * * 1-5",
    () => {
      keepServerAlive();
    },
    {
      timezone: "Europe/Dublin",
    }
  );
}

export { keepServerAlive, setupCronJob };
