import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGO_URI;
    if (!MONGODB_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Host: ${conn.connection.host}`);
  }catch (error) {
    console.error(error);
    process.exit(1); // Exit process with failure
  }
}