import { NextFunction, Request, Response } from "express";
import { courseValidation } from "./course.validation";
import { CourseServices } from "./course.service";
import httpStatus from "http-status";

const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const courseData = req.body;
    const validatedData =
      courseValidation.courseValidationSchema.parse(courseData);
    const result = await CourseServices.createCourseIntoDB(validatedData);
    res.status(200).json({
      success: true,
      statusCode: httpStatus.OK,
      message: "Course created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CourseServices.getAllCourseFromDB();
    res.status(200).json({
      success: true,
      message: "Courses retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const courseControllers = {
  createCourse,
  getAllCourse,
};