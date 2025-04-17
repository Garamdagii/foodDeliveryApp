import express from "express";
import {
  createFoodCategory,
  getFoodCategories,
  getFoodCategoryById,
} from "../controllers/foodCategory.js";

export const foodCategoryRouter = express.Router();

foodCategoryRouter
  .post("/", createFoodCategory)
  .get("/", getFoodCategories)
  .get("/:id", getFoodCategoryById);
