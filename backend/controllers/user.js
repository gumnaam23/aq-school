import { User } from "../models/user.js";
import bcrypt from 'bcrypt'
const saltRound = 10
import { setUser } from "../service/auth.js";

export const handleSignup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(401).json({ success: false, message: "All fields are required" })
    }

    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
        return res.json({ success: false, message: "User allready exsist" })
    }

    try {

        const salt = await bcrypt.genSalt(saltRound);

        const hashed = await bcrypt.hash(password, salt)

        const user = await User.create({ name, email, password: hashed })

        if (!user) {
            return res.json({ success: false, message: "User not created" })
        }

        const token = await setUser(user)
        res.cookie('token', token)
        res.status(201).json({ success: true, message: "User created successfully" })

    } catch (error) {
        if (error.name == "ValidationError") {

            console.error("Validation Error", error.message)
            res.status(400).json({ success: false, message: error.message })

        } else {

            console.error("Internal server error", error)
            res.status(500).json({ success: false, message: "Internal server error" })

        }
    }
}




export const handleLogin = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({ success: false, message: "All fields are required" })
    }

    try {

        const user = await User.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid username or password" })
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid username or password" })
        }
        
        const token = await setUser(user)
        res.cookie('token', token)
        res.json({ success: true, message: "User is logged in" })

    } catch (error) {
        if (error.name == "ValidationError") {

            console.error("Validation Error", error.message)
            res.json({ success: false, message: error.message })

        } else {

            console.error("Internal server error", error)
            res.status(500).json({ success: false, message: "Internal server error" })

        }
    }
}
