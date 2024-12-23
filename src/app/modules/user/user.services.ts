
import mongoose from "mongoose";
import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import academicSemestersModel from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interfaces";
import { studentsModel } from "../student/student.model";
import { TUser } from "./user.interfaces";
import { UsersModel } from "./user.model";
import { generateStudentId } from "./user.utils";
import AppError from "../../errors/AppErrors";

const createStudnetIntoDb = async (password : string , studentData : Partial<TStudent>) => {

    const userData : Partial<TUser> = {} ;
    userData.role = 'student' ;

    const academicDetails = await academicSemestersModel.findById(studentData.admissionSemester) ;

    const session = await mongoose.startSession() ;
    try {
        session.startTransaction() ;
        userData.id = await generateStudentId(academicDetails as TAcademicSemester) ;
        userData.password = password || config.defaultPass as string ;
    
        const newUser = await UsersModel.create([userData] , {session}) ;
        if(!newUser?.length){
            throw new AppError(500 , 'Failed to create user') ;
        }

        studentData.id = newUser[0]?.id ;
        studentData.user = newUser[0]?._id ;

        const newStudent = await studentsModel.create([studentData] , {session}) ;

        if(!newStudent?.length){
            throw new AppError(500 , 'Failed to create student') ;
        }

        await session.commitTransaction() ;
        await session.endSession() ;
        return newStudent ;
    } catch (error) {
        await session.abortTransaction() ;
        await session.endSession() ;
        throw new AppError(500 , 'Failed to create student') ;
    }
}

export const userService = {
    createStudnetIntoDb ,
}
