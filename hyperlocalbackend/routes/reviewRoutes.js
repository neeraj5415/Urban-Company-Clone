import express from "express";
import {
  createReview,
  getServiceReviews,
} from "../controllers/reviewController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/:serviceId", authenticate, authorize("user"), createReview);
router.get("/:serviceId", getServiceReviews);

export default router;