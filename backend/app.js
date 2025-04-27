import express from 'express'
import userRoute from './routes/user.js'
import contectRoute from './routes/contect.js'
import cookieParser from 'cookie-parser'
// import {ristricToLoggedinUserOnly} from './middleware/auth.js'

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.use('/api/user', userRoute)
app.use('/api/contect', contectRoute)

export default app