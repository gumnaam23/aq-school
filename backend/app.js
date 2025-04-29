import express from 'express'
import userRoute from './routes/user.js'
import contectRoute from './routes/contect.js'
import cookieParser from 'cookie-parser'
import cors from "cors"
// import {ristricToLoggedinUserOnly} from './middleware/auth.js'

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors({
  origin: 'https://aqschool.vercel.app/', // Frontend ka URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use('/api/user', userRoute)
app.use('/api/contect', contectRoute)


export default app
