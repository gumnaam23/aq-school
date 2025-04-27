import express from "express";
import {handleSignup, handleLogin } from '../controllers/user.js'

const router = express();

router.post('/', handleSignup)
router.post('/login', handleLogin)


export default router