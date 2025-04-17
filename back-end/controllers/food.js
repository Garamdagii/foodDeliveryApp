import { FoodModel } from "../model/food.js";

export const createFood = async (req, res) => {
  const { foodName, price, image, ingredients } = req.body;
  try {
    const food = await FoodModel.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
    });
    return res
      .status(200)
      .send({
        success: true,
        food: food,
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

export const getFoods = async (_, res) => {
  try {
    const foods = await FoodModel.find().populate("foodCategory");
    return res
      .status(200)
      .send({
        success: true,
        foods: foods,
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
