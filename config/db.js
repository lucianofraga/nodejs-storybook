import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

      console.log(`Mondo DB connected: ${conn.connection.host}`);
      
  } catch (error) {
    console.error(error);
    process.exit(1); // killing the app
  }
};

export default connectDb;
