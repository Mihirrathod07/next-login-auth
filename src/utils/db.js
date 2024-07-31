import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  console.log("MongoDB URL:", process.env.MONGO_URL);  // Log the URL for debugging

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      connectTimeoutMS: 20000,  // Set timeout to 20 seconds
    });
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    console.error("Error connecting to Mongoose:", error.message);
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
