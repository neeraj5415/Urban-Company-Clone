import express from "express";
import {
  getAllUsers,
  getAllProviders,
  getAllBookings,
  getAllServices,
  deleteUser,
  deleteProvider,
} from "../controllers/adminController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.use(authenticate, authorize("admin"));

router.get("/users", getAllUsers);
router.get("/providers", getAllProviders);
router.get("/bookings", getAllBookings);
router.get("/services", getAllServices);
router.delete("/user/:id", deleteUser);
router.delete("/provider/:id", deleteProvider);

export default router;