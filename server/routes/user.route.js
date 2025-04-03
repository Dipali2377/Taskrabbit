import express, { Router } from "express";
import { signup, login } from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);

export default userRoutes;
