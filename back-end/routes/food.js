import express from "express";
import { createFood, getFoodById, getFoods } from "../controllers/food.js";

export const foodRouter = express.Router();

foodRouter.post("/", createFood).get("/", getFoods).get("/:id", getFoodById);
