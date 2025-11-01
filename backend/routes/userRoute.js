import express from "express";
import { register, login , refreshAccessToken } from "../controller/userController.js";


const router = express.Router();

// POST /api/auth/register
router.post("/register",  register);

// POST /api/auth/login
router.post("/login",  login);

router.get("/refresh-token", refreshAccessToken);



export default router;
