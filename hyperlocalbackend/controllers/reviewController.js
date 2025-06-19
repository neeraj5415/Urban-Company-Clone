import Review from "../models/Review.js";
import Booking from "../models/Booking.js";

// Create a review for a booking
export const createReview = async (req, res) => {
  try {
    const { bookingId, rating, comment } = req.body;

    // Ensure booking exists and belongs to user
    const booking = await Booking.findById(bookingId).populate("service provider");
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    if (booking.user.toString() !== req.user.id)
      return res.status(403).json({ message: "Not authorized to review this booking" });

    // Check if review already exists
    const existingReview = await Review.findOne({ booking: bookingId });
    if (existingReview)
      return res.status(400).json({ message: "You have already reviewed this booking" });

    const review = new Review({
      user: req.user.id,
      provider: booking.provider._id,
      service: booking.service._id,
      booking: bookingId,
      rating,
      comment,
    });

    await review.save();
    res.status(201).json({ message: "Review added", review });
  } catch (err) {
    res.status(500).json({ message: "Failed to create review", error: err.message });
  }
};

// Get all reviews for a provider
export const getProviderReviews = async (req, res) => {
  try {
    const providerId = req.params.providerId;
    const reviews = await Review.find({ provider: providerId }).populate("user service", "name");
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to get reviews", error: err.message });
  }
};

// Get all reviews for a service
export const getServiceReviews = async (req, res) => {
  try {
    const serviceId = req.params.serviceId;
    const reviews = await Review.find({ service: serviceId }).populate("user", "name");
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to get service reviews", error: err.message });
  }
};