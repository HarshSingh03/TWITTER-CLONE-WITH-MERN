import 'express-async-errors'
import express from 'express';
import authRoutes from './routes/auth_routes.js'
import dotenv from 'dotenv';
import connectMongoDB from './db/connectDB.js';
import {errorHandler} from './middleware/error-handler.js'
import cookieParser from 'cookie-parser';
dotenv.config();

const app=express();
const PORT = process.env.PORT

app.use(express.json()); //to parse express body
app.use(express.urlencoded({extended:true}));//to parse form data in form of url encoded
app.use(cookieParser());


app.use("/api/auth",authRoutes);



//error handling middleware
app.use(errorHandler);

app.listen(PORT, ()=>{
  console.log(`Server is up and running on this ${process.env.PORT}`)
  connectMongoDB();
})