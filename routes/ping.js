import { Router } from "express";

const router = Router();

// Ping route
router.get("/ping", (req, res) => {
  res.send("pong");
});

export default router;
