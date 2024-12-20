import mongoose from "mongoose";

const connectMongoDB = async ()=> {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_MAIN)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  }
   catch (error) {
    console.log(error.message);
    process.exit(1)
  }
}

export default connectMongoDB