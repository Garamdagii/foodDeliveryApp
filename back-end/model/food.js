import mongoose, { Schema } from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
});

export const FoodModel = mongoose.model("Food", foodSchema);
