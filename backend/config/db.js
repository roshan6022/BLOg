import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log("Connected to the Database");
  } catch (err) {
    console.error("Error connecting to the database", err);
    process.exit(1);
  }
};

export default connectDB;
