import express from "express";
import { createPaymentOrder, verifyPayment } from "../controllers/paymentController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create-order", authenticate, createPaymentOrder);
router.post("/verify", authenticate, verifyPayment);

export default router;
