import express from "express";
import {
  createFoodOrder,
  getFoodOrderById,
  getFoodOrders,
} from "../controllers/foodOrder.js";

export const foodOrderRouter = express.Router();

foodOrderRouter
  .post("/", createFoodOrder)
  .get("/", getFoodOrders)
  .get("/:id", getFoodOrderById);
