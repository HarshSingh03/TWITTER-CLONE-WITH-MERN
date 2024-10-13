import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userID,res)=>{
  const token = jwt.sign({userID},process.env.JWT_SECRET,{
    expiresIn:'15d'
  })
  res.cookie('jwt',token,{
    maxAge:15*24*3600*1000,//in milliseconds
    httpOnly:true,//prevent XSS attacks cross-site scripting
    sameSite:"strict",//CSRF attacks cross-site request forgery
    secure:process.env.NODE_ENV!=="development",
  })
}