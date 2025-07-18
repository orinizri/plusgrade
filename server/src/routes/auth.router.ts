import express from "express";
import {
  loginController,
  refreshTokenController,
  registerController,
} from "../controllers/auth.controller.ts";

const authRouter = express.Router();

authRouter.post("/login", loginController);
authRouter.post("/register", registerController);
authRouter.post("/refresh", refreshTokenController);
export default authRouter;
