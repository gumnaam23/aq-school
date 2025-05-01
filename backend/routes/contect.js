import express from "express";
import {handleContect} from '../controllers/contect.js'

const router = express.Router();

router.post('/contect', handleContect);

export default router
