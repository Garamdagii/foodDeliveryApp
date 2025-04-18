import mongoose, { Schema } from "mongoose";

const FoodOrderItemSchema = new mongoose.Schema({
  food: {
    type: Schema.Types.ObjectId,
    ref: "food",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const foodOrderSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  foodOrderItems: { FoodOrderItemSchema },
  status: {
    type: String,
    required: true,
    enam: ["Pending", "Canceled", "Delivered"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const FoodOrderModel = mongoose.model("FoodOrder", foodOrderSchema);
