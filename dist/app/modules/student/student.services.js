"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentServices = void 0;
const student_model_1 = require("./student.model");
const getAllStudentsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.studentsModel.find().populate("admissionSemester").populate({ path: "academicDepartment", populate: { path: "academicFaculty" } });
    return result;
});
const getSpecificStudentFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.studentsModel.findById(id).populate("admissionSemester").populate({ path: "academicDepartment", populate: { path: "academicFaculty" } });
    return result;
});
const deleteAStudentFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.studentsModel.deleteOne({ _id: id });
    return result;
});
exports.studentServices = {
    deleteAStudentFromDb,
    getAllStudentsFromDb,
    getSpecificStudentFromDb
};
