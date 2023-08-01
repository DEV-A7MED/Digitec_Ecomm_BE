import { Router } from "express";
import * as authCtrl from "./authController.js"
import { asyncHandler } from "../../utils/errorHandling.js";
const router =Router();

router.post('/signup',asyncHandler(authCtrl.signup))


export default router;