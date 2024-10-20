import Notification from "../models/notification_model.js";

export const getNotifications = async (req,res)=>{
  try {
    const userId = req.user._id;
    const notifications = await Notification.find({to:userId})
      .populate({
        path:'from',
        select:'username profileImg'
      });
    if (!notifications) return res.status(200).json([]);
    await Notification.updateMany({to:userId},{read:true});
    res.status(200).json(notifications);
    
  } catch (error) {
    console.log("Error in getNotifications controller :",error);
    return res.status(500).json({error:"Internal Server Error"})
  }

}

export const deleteNotifications = async (req,res) => {
  try {
    const userId = req.user._id;

    await Notification.deleteMany({to:userId});

    res.status(200).json({message:"Notifications deleted successfully"});
  } catch (error) {
    console.log("Error in deleteNotifications controller :",error);
    return res.status(500).json({error:'Internal Server Error'});
  }
}

export const deleteNotification = async (req,res) => {
  try {
    const userId = req.user._id;
    const notificationId = req.params.id;
    const notification = await Notification.findById(notificationId)
    if (!notification) return res.status(404).json({error:"Notification not found"});
    if (notification.to.toString() !== userId.toString()){
      return res.status(403).json({error:'You are not allowed to delete notification'})
    }
    await Notification.findByIdAndDelete(notification);
    res.status(200).json({message:"Notification deleted successfully"})
  } catch (error) {
    console.log("Error in deleteNotification from js") 
    return res.status(500).json({error:"Internal Server Error"});
  }
}