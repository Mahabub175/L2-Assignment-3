import { TCategory } from "./category.interface";
import { CategoryModel } from "./category.model";

const createCategoryIntoDB = async (categoryData: TCategory) => {
  const result = await CategoryModel.create(categoryData);
  return result;
};

const getAllCategoryFromDB = async () => {
  const result = await CategoryModel.find();
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoryFromDB,
};
