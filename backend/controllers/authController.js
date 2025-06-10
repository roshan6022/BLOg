import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";

const generatedToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
  // openssl rand -hex 64 to create JWT_SECRET
};

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return next(createError(400, "User already exsits"));
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Return user data with JWT
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generatedToken(user._id),
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if email and password is provided
    if (!email || !password) {
      return next(createError(400, "Email and Password are required"));
    }

    // Check if user exists
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return next(createError(404, "User Not Found!"));
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(createError(401, "Invalid Email or Password"));
    }

    //  Return user data with JWT
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generatedToken(user._id),
    });
  } catch (error) {
    next(error);
  }
};

export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return next(createError(404, "User not found!"));
    }

    res.status(200).json(user); // ✅ Success response
  } catch (error) {
    next(error);
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      token: generatedToken(updatedUser._id),
    });
  } catch (error) {
    next(error);
  }
};
