import express from "express";
import { Register } from "../controller/auth.controller.js";
import { upload } from "../services/fileMove.js";
const router=express.Router()


router.post("/register", upload.single("profilePicture"),
Register)
export default router