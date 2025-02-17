
import { model, Schema, Types } from "mongoose";
import { TGuardian, TLocalGuardian, TStudent, TUserName } from "./student.interfaces";
import AppError from "../../errors/AppErrors";

const nameSchema = new Schema<TUserName>({
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

const guardianSchema = new Schema<TGuardian>({
    fatherName: {
        type: String,
        required: [true, "father name is required!"],
    },
    fatherContactNo: {
        type: String,
        required: [true, "father contact no is required!"],
    },
    fatherOccupation: {
        type: String,
        required: [true, "father occupation no is required!"],
    },
    motherName: {
        type: String,
        required: [true, "mother name no is required!"],
    },
    motherContactNo: {
        type: String,
        required: [true, "mother contact no is required!"],
    },
    motherOccupation: {
        type: String,
        required: [true, "mother occupation no is required!"],
    },
})

const localGuardianSchema = new Schema<TLocalGuardian>({
    name: {
        type: String,
        required: [true, "name is required!"],
    },
    occupation: {
        type: String,
        required: [true, "occupation is required!"],
    },
    contactNo: {
        type: String,
        required: [true, "contactNo is required!"],
    },
    address: {
        type: String,
        required: [true, "address is required!"],
    },
})

const studentSchema = new Schema<TStudent>({
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
    guardian : {
        type : guardianSchema ,
        required : [true , "Guardian is required !"] ,
    },
    localGuardian : {
        type : localGuardianSchema ,
        required : [true , "Guardian is required !"] ,
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
    gender : {
        type : String ,
        enum : ["male" , "female" , "other"] ,
        required : [true , "gender is required !"] ,
    },
    admissionSemester : {
        type : Schema.Types.ObjectId ,
        ref : "academicSemester" ,
        required : [true , "admissionSemester is required !"] ,
    },
    academicDepartment : {
        type : Schema.Types.ObjectId ,
        ref : "academicDepartment" ,
        required : [true , "admissionSemester is required !"] ,
    },
    academicFaculty : {
        type : Schema.Types.ObjectId ,
        ref : "academicFaculty" ,
        required : [true , "Academic faculty is required !"] ,
    },
})

studentSchema.pre('findOneAndUpdate', async function(next) {
    const student = await studentsModel.findOne({id : this.getQuery().id}) ;
    if (!student) {
        throw new AppError(404, "Student not found!");
    }
    next();
});

export const studentsModel = model('student' , studentSchema) ;
