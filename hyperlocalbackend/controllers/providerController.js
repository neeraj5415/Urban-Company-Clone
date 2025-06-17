import Service from "../models/service.js";

export const getProviderServices = async (req, res) => {
  try {
    const services = await Service.find({ provider: req.user._id });
    res.json(services);
  } catch (error) {
    console.error("Error fetching provider services:", error);
    res.status(500).json({ message: "Failed to fetch provider services" });
  }
};