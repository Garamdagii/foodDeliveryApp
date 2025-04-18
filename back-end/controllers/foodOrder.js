import { FoodOrderModel } from "../model/foodOrder.js";

export const createFoodOrder = async (req, res) => {
  const { totalPrice, status } = req.params;
  try {
    const FoodOrder = await FoodOrderModel.create({
      totalPrice: totalPrice,
      status: status,
    });
    return res
      .status(200)
      .send({
        success: true,
        FoodOrder: FoodOrder,
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

export const getFoodOrders = async (_, res) => {
  try {
    const Orders = await FoodOrderModel.find().populate("foodOrderItem");
    return res
      .status(200)
      .send({
        success: true,
        Orders: Orders,
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

export const getFoodOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const FoodOrder = await FoodOrderModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        FoodOrder: FoodOrder,
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
