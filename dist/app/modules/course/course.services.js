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
exports.courseServices = void 0;
const course_model_1 = require("./course.model");
const createCourseIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.coursesModel.create(payload);
    return result;
});
const getAllCourseFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.coursesModel.find();
    return result;
});
const getSingleCourseFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.coursesModel.find();
    return result;
});
const deleteCourseFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.coursesModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
});
exports.courseServices = {
    createCourseIntoDb,
    getAllCourseFromDb,
    deleteCourseFromDb,
    getSingleCourseFromDb,
};
