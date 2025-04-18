import { FoodOrderItemModel } from "../model/foodOrderItem.js";

export const createFoodOrderItem = async (req, res) => {
  const { food, quantity } = req.body;
  try {
    const FoodOrderItem = await FoodOrderItemModel.create({
      food: food,
      quantity: quantity,
    });
    return res
      .status(200)
      .send({
        success: true,
        FoodOrderItem: FoodOrderItem,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
  }
  return res
    .status(400)
    .send({
      success: false,
      message: error,
    })
    .end();
};

export const getOrderItems = async (_, res) => {
  try {
    const OrderItems = await FoodOrderItemModel.find().populate("food");
    return res
      .status(200)
      .send({
        success: true,
        OrderItems: OrderItems,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
  }
  return res
    .status(400)
    .send({
      success: false,
      message: error,
    })
    .end();
};

export const getFoodOrderItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const OrderItem = await FoodOrderItemModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        OrderItem: OrderItem,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
  }
  return res
    .status(400)
    .send({
      success: false,
      message: error,
    })
    .end();
};
