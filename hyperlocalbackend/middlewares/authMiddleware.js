import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Provider from "../models/Provider.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access token missing" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    if (decoded.role === "user") {
      req.profile = await User.findById(decoded.id).select("-password");
    } else if (decoded.role === "provider") {
      req.profile = await Provider.findById(decoded.id).select("-password");
    }

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
