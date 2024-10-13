import express from 'express';
import authRoutes from './routes/auth_routes.js'
const app=express();

app.use("/api/auth",authRoutes)

app.listen(8000, ()=>{
  console.log('Server is up and running on this port')
})