import { getUser } from '../service/auth.js' 

export const ristricToLoggedinUserOnly = async (req, res, next) => {
  const token = await req.cookies?.token

  if(!token){
    return res.status(401).json({success: false, message: "unauthorized token found"})
  }

  const user = await getUser(token)


  if(!user){
    return res.status(401).json({success: false, message: "Invalid or expire token found"})
  }

  req.user = user
  next();
}
