
import express from "express"
import { studentRoutes } from "../modules/student/student.routes";
import { userRoutes } from "../modules/user/user.routes";
import { academicSemesterRoutes } from "../modules/academicSemester/academicSemester.routes";
import { academicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.routes";
import { academicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.routes";
import { facultyRoutes } from "../modules/faculty/faculty.routes";
import { adminRoutes } from "../modules/admin/admin.routes";
import { courseRoutes } from "../modules/course/course.routes";
import { semesterRegistrationRoutes } from "../modules/semesterRegistration/semesterRegistration.routes";
import { offeredCourseRoutes } from "../modules/offeredCourse/offeredCourse.routes";

const router = express.Router() ;

const moduleRoutes = [
    {
        path : '/users' ,
        route : userRoutes ,
    } ,
    {
        path : '/students' ,
        route : studentRoutes ,
    } ,
    {
        path : '/courses' ,
        route : courseRoutes ,
    } ,
    {
        path : '/admins' ,
        route : adminRoutes ,
    } ,
    {
        path : '/faculties' ,
        route : facultyRoutes ,
    } ,
    {
        path : '/academic-faculties' ,
        route : academicFacultyRoutes ,
    } ,
    {
        path : '/academic-semesters' ,
        route : academicSemesterRoutes ,
    } ,
    {
        path : '/academic-departments' ,
        route : academicDepartmentRoutes ,
    } ,
    {
        path : '/semester-registrations' ,
        route : semesterRegistrationRoutes ,
    } ,
    {
        path : '/offered-courses' ,
        route : offeredCourseRoutes ,
    } ,
]

moduleRoutes.forEach((route) => router.use(route.path , route.route)) ;

export default router ;
