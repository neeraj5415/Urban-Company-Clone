import express from "express";
import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  getProviderServices,
} from "../controllers/serviceController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.get("/provider/:providerId", getProviderServices);

router.post("/", authenticate, authorize("provider"), createService);
router.put("/:id", authenticate, authorize("provider"), updateService);
router.delete("/:id", authenticate, authorize("provider"), deleteService);

export default router;