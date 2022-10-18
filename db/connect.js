import mongoose from "mongoose";

const connectDB = (url) => {
  console.log("DB connected successfully!");
  return mongoose.connect(url);
};

export default connectDB;
