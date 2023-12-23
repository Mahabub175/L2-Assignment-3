import { Schema, model } from "mongoose";
import { TCourse } from "./course.interface";

const courseSchema = new Schema<TCourse>({
  title: { type: String, required: true, unique: true },
  instructor: { type: String, required: true },
  categoryId: {
    type: Schema.ObjectId,
    required: true,
    ref: "Category",
  },
  price: { type: Number, required: true },
  tags: [
    {
      name: {
        type: String,
        required: true,
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
    },
  ],
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  language: { type: String, required: true },
  provider: { type: String, required: true },
  durationInWeeks: { type: Number },
  details: {
    level: { type: String, required: true },
    description: { type: String, required: true },
  },
});

export const CourseModel = model<TCourse>("Course", courseSchema);
