import express from "express";
const router = express.Router();

import { signin, signup,googleSignUp } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/googleSignUp", googleSignUp);

export default router;