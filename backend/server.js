import path from 'path';
import 'express-async-errors'
import express from 'express';
import authRoutes from './routes/auth_route.js'
import dotenv from 'dotenv';
import connectMongoDB from './db/connectDB.js';
import {errorHandler} from './middleware/error-handler.js'
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user_route.js'
import postRoutes from './routes/post_route.js'
import notificationRouter from './routes/notification_route.js'
import {v2 as cloudinary} from "cloudinary";
import cors from 'cors';

dotenv.config();
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,
})

const app=express();
app.use(cors());
const PORT = process.env.PORT || 3000
const __dirname = path.resolve()
app.use(express.json({limit:"5mb"})); //to parse express body
//if limit too large or system vulnerable to DoService attacks
app.use(express.urlencoded({extended:true}));//to parse form data in form of url encoded
app.use(cookieParser());


app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts",postRoutes);
app.use('/api/notifications',notificationRouter)

//error handling middleware
app.use(errorHandler);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,"/frontend/dist")));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
  })
}

app.listen(PORT, ()=>{
  console.log(`Server is up and running on this ${PORT}`)
  connectMongoDB();
})
