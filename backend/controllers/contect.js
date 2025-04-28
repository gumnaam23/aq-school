import { Contect } from "../models/contect.js";

export const handleContect = async(req, res) => {
  const {name, message} = req.body;
  // const email = req.user?.email


  if(!name || !message){
    return res.json({success: false, message: 'All fields are required'})
  }
  try {
    const contect = await Contect.create({name, message})

    if (!contect) {
        return res.json({success: false, message: "fail to contect with us"})
    }
    res.status(200).json({success: true, message: "Message sent successfully"})
  } catch (error) {
    if(error.name == "ValidationError"){
        console.error("validation error", error.message)
        res.json({success: false, message: error.message})
    }else{
        console.error("Internal server error", error)
        res.status(500).json({success: false, message: error.message})
    }
  }
}
