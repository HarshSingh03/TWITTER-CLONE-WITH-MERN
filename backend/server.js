import express from 'express';
import authRoutes from './routes/auth_routes.js'
import dotenv from 'dotenv';
import connectMongoDB from './db/connectDB.js';
dotenv.config();

const app=express();
const PORT = process.env.PORT

console.log(process.env.MONGO_URI)
app.use("/api/auth",authRoutes)



app.listen(PORT, ()=>{
  console.log(`Server is up and running on this ${process.env.PORT}`)
  connectMongoDB();
})