import express from "express";
import {
  createBooking,
  getUserBookings,
  getProviderBookings,
  cancelBooking,
  completeBooking,
} from "../controllers/bookingController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", authenticate, authorize("user"), createBooking);
router.get("/user", authenticate, authorize("user"), getUserBookings);
router.get("/provider", authenticate, authorize("provider"), getProviderBookings);
router.put("/:id/cancel", authenticate, cancelBooking);
router.put("/:id/complete", authenticate, authorize("provider"), completeBooking);

export default router;