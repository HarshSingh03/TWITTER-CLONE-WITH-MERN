import express from 'express';
import { getUserProfile, followUnfollowUser, getSuggestedUsers, updateUser } from '../controllers/user_controller.js';  
import { protectRoute } from '../middleware/protectedRoute.js';

const router = express.Router()

router.get("/profile/:username",protectRoute,getUserProfile);
router.get("/suggested/",protectRoute,getSuggestedUsers);
router.post("/follow/:id",protectRoute,followUnfollowUser);
router.post("/update",protectRoute,updateUser);



export default router;
