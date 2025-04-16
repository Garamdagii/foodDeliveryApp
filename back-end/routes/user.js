import express from "express";
import { createUser, getUserByID, getUsers } from "../controllers/user.js";

export const userRouter = express.Router();
userRouter.post("/", createUser).get("/", getUsers).get("/:id", getUserByID);
