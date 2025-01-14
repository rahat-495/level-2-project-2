
import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { offeredCourseServices } from "./offeredCourse.services";

const createOfferedCourse : RequestHandler = catchAsync(async (req , res) => {
    const result = await offeredCourseServices.createOfferedCourseIntoDb(req.body) ;
    if(result){
        sendResponse<object>(res , {data : result , statusCode : 200 , success : true , message : "Course Created Successfully !"}) ;
    }
})

const getAllOfferdCourses : RequestHandler = catchAsync(async (req , res) => {
    // const result = await courseServices.getAllCourseFromDb(req.query) ;
    // if(result){
    //     sendResponse<object>(res , {data : result , statusCode : 200 , success : true , message : "All courses are retrive Successfully !"}) ;
    // }
})

const getSingleOfferedCourse : RequestHandler = catchAsync(async (req , res) => {
    // const result = await courseServices.getSingleCourseFromDb(req.params.id) ;
    // if(result){
    //     sendResponse<object>(res , {data : result , statusCode : 200 , success : true , message : "Course are retrive Successfully !"}) ;
    // }
})

const updateOfferedCourse : RequestHandler = catchAsync(async (req , res) => {
    // const result = await courseServices.updateCourseIntoDb(req.params.id , req.body) ;
    // if(result){
    //     sendResponse<object>(res , {data : result , statusCode : 200 , success : true , message : "Course are updated Successfully !"}) ;
    // }
})

export const offeredCourseControllers = {
    updateOfferedCourse, 
    createOfferedCourse ,
    getAllOfferdCourses ,
    getSingleOfferedCourse ,
}
