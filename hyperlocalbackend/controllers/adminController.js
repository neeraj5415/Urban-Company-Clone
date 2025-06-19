import User from "../models/User.js";
import Provider from "../models/Provider.js";
import Booking from "../models/Booking.js";
import Service from "../models/Service.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");
    res.status(200).json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch users", error: err.message });
  }
};

// Get all providers
export const getAllProviders = async (req, res) => {
  try {
    const providers = await Provider.find().select("-password");
    res.status(200).json({ success: true, providers });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch providers", error: err.message });
  }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user provider service");
    res.status(200).json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch bookings", error: err.message });
  }
};

// Get all services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate("provider");
    res.status(200).json({ success: true, services });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch services", error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE a Provider
export const deleteProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const provider = await Provider.findByIdAndDelete(id);
    if (!provider) return res.status(404).json({ message: "Provider not found" });
    res.status(200).json({ message: "Provider deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};