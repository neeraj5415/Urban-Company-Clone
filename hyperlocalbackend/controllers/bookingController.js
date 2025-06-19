import Booking from "../models/Booking.js";
import Service from "../models/Service.js";


// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { serviceId, date, time } = req.body;
    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ message: "Service not found" });

    const booking = new Booking({
      user: req.user.id,
      provider: service.provider,
      service: serviceId,
      date,
      time,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: "Failed to create booking", error: err.message });
  }
};

// Get bookings for logged-in user
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate("service provider", "name");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user bookings", error: err.message });
  }
};

// Get bookings for logged-in provider
export const getProviderBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ provider: req.user.id }).populate("service user", "name");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch provider bookings", error: err.message });
  }
};

// Get all bookings (Admin)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("service user provider", "name");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch all bookings", error: err.message });
  }
};

// Update booking status (e.g., completed, cancelled)
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    booking.status = status;
    await booking.save();
    res.json({ message: "Status updated", booking });
  } catch (err) {
    res.status(500).json({ message: "Failed to update booking", error: err.message });
  }
};
export const cancelBooking = async (req, res) => {
  try {
    // logic to cancel a booking
    res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to cancel booking" });
  }
};

export const completeBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = "Completed"; // or whatever status field you use
    await booking.save();

    res.status(200).json({ message: "Booking marked as completed", booking });
  } catch (error) {
    res.status(500).json({ error: "Failed to complete booking" });
  }
};