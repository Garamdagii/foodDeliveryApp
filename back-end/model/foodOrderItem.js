import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

export const OrderItemModel = mongoose.model("OrderItem", OrderItemSchema);
