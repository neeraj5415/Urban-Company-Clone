import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import { getUserProfile } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", authenticate, (req, res) => {
  res.json(req.profile);
});
export default router;