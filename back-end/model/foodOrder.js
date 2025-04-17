import mongoose, { mongo } from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
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
