import express from "express";
import { register, login, refreshAccessToken, logout } from "../controller/userController.js";



const router = express.Router();

// POST /api/auth/register
router.post("/register",  register);

// POST /api/auth/login
router.post("/login",  login);

router.get("/refresh-token", refreshAccessToken);
router.post("/logout", logout);




export default router;
