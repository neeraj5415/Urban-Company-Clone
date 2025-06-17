import crypto from "crypto";

import Booking from "../models/Booking.js";
import instance from "../utils/razorpay.js";

// Create a Razorpay order
export const createPaymentOrder = async (req, res) => {
  try {
    const { amount, bookingId } = req.body;

    const options = {
      amount: amount * 100, // Amount in paisa
      currency: "INR",
      receipt: `receipt_order_${bookingId}`,
    };

    const order = await instance.orders.create(options);
    res.status(201).json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: "Payment order creation failed", error: err.message });
  }
};

// Verify Razorpay payment
export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingId,
    } = req.body;

    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    const isValid = generated_signature === razorpay_signature;

    if (!isValid) {
      return res.status(400).json({ success: false, message: "Payment verification failed" });
    }

    // Update booking status to paid
    await Booking.findByIdAndUpdate(bookingId, {
      isPaid: true,
      paymentInfo: {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      },
    });

    res.status(200).json({ success: true, message: "Payment verified" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Payment verification error", error: err.message });
  }
};