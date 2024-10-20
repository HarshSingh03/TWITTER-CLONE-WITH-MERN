import 'express-async-errors'
import express from 'express';
import authRoutes from './routes/auth_routes.js'
import dotenv from 'dotenv';
import connectMongoDB from './db/connectDB.js';
import {errorHandler} from './middleware/error-handler.js'
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user_routes.js'
import postRoutes from './routes/post_routes.js'
import {v2 as cloudinary} from "cloudinary";

dotenv.config();
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_KEY,
})

const app=express();
const PORT = process.env.PORT

app.use(express.json()); //to parse express body
app.use(express.urlencoded({extended:true}));//to parse form data in form of url encoded
app.use(cookieParser());


app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts",postRoutes)


//error handling middleware
app.use(errorHandler);

app.listen(PORT, ()=>{
  console.log(`Server is up and running on this ${process.env.PORT}`)
  connectMongoDB();
})