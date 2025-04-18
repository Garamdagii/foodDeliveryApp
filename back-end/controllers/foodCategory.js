import { FoodCategoryModel } from "../model/foodCategory.js";

export const createFoodCategory = async (req, res) => {
  const { categoryName } = req.body;

  try {
    const foodCategory = await FoodCategoryModel.create({
      categoryName: categoryName,
    });
    return res
      .status(200)
      .send({
        success: true,
        foodCategory: foodCategory,
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

export const getFoodCategories = async (_, res) => {
  try {
    const categories = await FoodCategoryModel.find();
    return res
      .status(200)
      .send({
        success: true,
        categories: categories,
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

export const getFoodCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const foodCategory = await FoodCategoryModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        foodCategory: foodCategory,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
  }
  return res
    .staus(400)
    .send({
      success: false,
      message: error,
    })
    .end();
};
