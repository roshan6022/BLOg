import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import createError from "../utils/createError.js";

export const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer ")) {
      token = token.split(" ")[1]; // Get the token part after "Bearer"
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user to the request object, excluding password
      req.user = await User.findById(decoded.id).select("-password"); //exculde password

      if (!req.user) {
        return next(createError(401, "User not found"));
      }
      next();
    } else {
      return next(createError(401, "Not Authorized Token is missing"));
    }
  } catch (error) {
    next(error);
  }
};
