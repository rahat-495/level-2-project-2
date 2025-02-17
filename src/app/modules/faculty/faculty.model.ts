
import { model, Schema, Types } from "mongoose";
import AppError from "../../errors/AppErrors";
import { TFaculty, TFacultyName } from "./faculty.interfaces";
import { academicDepartmentsModel } from "../academicDepartment/academicDepartment.model";
import { academicFacultysModel } from "../academicFaculty/academicFaculty.model";

const nameSchema = new Schema<TFacultyName>({
    firstName: {
        type: String,
        required: [true, "First name is required!"],
    },
    middleName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required!"],
    },    
})

const facultySchema = new Schema<TFaculty>({
    id : {
        type : String ,
        unique : true ,
        required : [true , "ID is required !"] ,
    },
    user : {
        ref : 'user' ,
        unique : true ,
        type : Schema.Types.ObjectId ,
        required : [true , "User Id is required !"] ,
    },
    name : {
        type : nameSchema ,
        required : [true , "Name is required !"] ,
    },
    isDeleted : {
        type : Boolean ,
        default : false ,
    },
    profileImg : {
        type : String ,
        default : "" ,
    },
    permanentAddress : {
        type : String ,
        required : [true , "Permanent address is required !"] ,
    },
    presentAddress : {
        type : String ,
        required : [true , "Present address is required !"] ,
    },
    contactNo : {
        type : String ,
        required : [true , "contact No is required !"] ,
    },
    emergencyContactNo : {
        type : String ,
        required : [true , "emergency Contact No is required !"] ,
    },
    email : {
        type : String ,
        unique : true ,
        required : [true , "email is required !"] ,
    },
    dateOfBirth : {
        type : String ,
        required : [true , "date Of Birth is required !"] ,
    },
    designation : {
        type : String ,
        required : [true , "designation is required !"] ,
    },
    gender : {
        type : String ,
        enum : ["male" , "female" , "other"] ,
        required : [true , "gender is required !"] ,
    },
    academicFaculty : {
        type : Schema.Types.ObjectId ,
        ref : "academicFaculty" ,
        required : [true , "academic faculty is required !"] ,
    },
    academicDepartment : {
        type : Schema.Types.ObjectId ,
        ref : "academicDepartment" ,
        required : [true , "academicDepartment is required !"] ,
    },
});

facultySchema.pre("save" , async function(next){
    const faculty = this ;
    const academicDepartment = await academicDepartmentsModel.findOne({_id : faculty.academicDepartment}) ;
    if(!academicDepartment){
        throw new AppError(404 , "Academic department not found !") ;
    }
    const academicFaculty = await academicFacultysModel.findOne({_id : faculty.academicFaculty}) ;
    if(!academicFaculty){
        throw new AppError(404 , "Academic faculty not found !") ;
    }
    next() ;
})

facultySchema.pre("find", async function(next){
    this.find({isDeleted : {$ne : true}}) ;
    next() ;
});

facultySchema.pre("findOne", async function(next){
    this.findOne({isDeleted : {$ne : true}}) ;
    next() ;
});

facultySchema.pre('findOneAndUpdate', async function(next) {
    const faculty = await facultysModel.findOne({id : this.getQuery().id}) ;
    if (!faculty) {
        throw new AppError(404, "faculty not found!");
    }
    next();
});

export const facultysModel = model('faculty' , facultySchema) ;
