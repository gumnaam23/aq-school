import express from "express";
import {handleSignup, handleLogin } from '../controllers/user.js'

const router = express();

router.post('/user/', handleSignup)
router.post('/user/login', handleLogin)


export default router
