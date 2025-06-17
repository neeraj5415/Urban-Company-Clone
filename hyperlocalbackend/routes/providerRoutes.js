import express from "express";
import { authenticate, authorizeRoles } from "../middleware/authMiddleware.js";
import { getProviderServices } from "../controllers/providerController.js";


const router = express.Router();

// Only logged-in providers can access their own services
router.get("/services", protect, restrictTo("provider"), getProviderServices);

export default router;