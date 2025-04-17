import express from "express";
import { createFood, getFoods } from "../controllers/food.js";

export const foodRouter = express.Router();

foodRouter.post("/", createFood).get("/", getFoods);
