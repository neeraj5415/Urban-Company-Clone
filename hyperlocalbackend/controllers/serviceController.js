  import Service from "../models/Service.js";

  // Create a new service
  export const createService = async (req, res) => {
    try {
      const providerId = req.user.id;
      const { name, description, price, category } = req.body;

      const service = new Service({
        name,
        description,
        price,
        category,
        provider: providerId,
      });

      await service.save();
      res.status(201).json(service);
    } catch (err) {
      res.status(500).json({ message: "Failed to create service", error: err.message });
    }
  };

  // Get all services (optionally filtered by category or search query)
  export const getAllServices = async (req, res) => {
    try {
      const { category, search } = req.query;
      let query = {};

      if (category) query.category = category;
      if (search)
        query.name = { $regex: search, $options: "i" };

      const services = await Service.find(query).populate("provider", "name");
      res.json(services);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch services", error: err.message });
    }
  };

  // Get service by ID
  export const getServiceById = async (req, res) => {
    try {
      const service = await Service.findById(req.params.id).populate("provider", "name");
      if (!service) return res.status(404).json({ message: "Service not found" });
      res.json(service);
    } catch (err) {
      res.status(500).json({ message: "Failed to get service", error: err.message });
    }
  };

  // Get services of logged-in provider
  export const getProviderServices = async (req, res) => {
    try {
      const services = await Service.find({ provider: req.user.id });
      res.json(services);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch provider services", error: err.message });
    }
  };
  export const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // Optionally, check if the logged-in user is the owner/provider
    if (service.provider.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to delete this service" });
    }

    await service.deleteOne();

    res.json({ message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete service", error: err.message });
  }
};
export const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // Check if the logged-in provider owns this service
    if (service.provider.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const { name, description, price, category } = req.body;

    service.name = name || service.name;
    service.description = description || service.description;
    service.price = price || service.price;
    service.category = category || service.category;

    const updatedService = await service.save();
    res.json(updatedService);
  } catch (err) {
    res.status(500).json({ message: "Failed to update service", error: err.message });
  }
};