import { TReview } from "./review.interface";
import { ReviewModel } from "./review.model";

const createReviewIntoDB = async (reviewData: TReview) => {
  const result = await ReviewModel.create(reviewData);
  return result;
};

export const ReviewServices = {
  createReviewIntoDB,
};