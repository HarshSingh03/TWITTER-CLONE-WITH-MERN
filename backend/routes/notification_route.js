import express from 'express';
import { protectRoute } from '../middleware/protectedRoute.js';
import { getNotifications, deleteNotifications, deleteNotification } from '../controllers/notification_controller.js';
const router = express.Router();



router.get("/",protectRoute,getNotifications);
router.delete('/',protectRoute,deleteNotifications);
router.delete('/:id',protectRoute, deleteNotification);





export default router;