import express from "express";
import { signup, login, logout,getMe } from "../controllers/auth_controller.js";
import { protectRoute } from "../middleware/protectedRoute.js";
const router = express.Router();


router.get('/me', protectRoute ,getMe)
router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)

export default router;