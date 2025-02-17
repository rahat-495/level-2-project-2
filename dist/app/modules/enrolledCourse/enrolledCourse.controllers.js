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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrolledCourseControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const enrolledCourse_services_1 = require("./enrolledCourse.services");
const createEnrolledCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield enrolledCourse_services_1.enrolledCourseSerivces.createEnrolledCourseIntoDb(req.user.userId, req.body);
    if (result) {
        (0, sendResponse_1.default)(res, { data: result, statusCode: 200, success: true, message: "Enrolled Course Creatad Successfully !" });
    }
}));
const updateEnrolledCourseMarks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield enrolledCourse_services_1.enrolledCourseSerivces.updateEnrolledCourseMarksIntoDb((_a = req.user) === null || _a === void 0 ? void 0 : _a.userId, req.body);
    if (result) {
        (0, sendResponse_1.default)(res, { data: result, statusCode: 200, success: true, message: "Enrolled Course Updated Successfully !" });
    }
}));
const getMyEnrolledCourses = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield enrolledCourse_services_1.enrolledCourseSerivces.getMyEnrolledCoursesFromDb((_a = req.user) === null || _a === void 0 ? void 0 : _a.userId, req.query);
    if (result) {
        (0, sendResponse_1.default)(res, { meta: result === null || result === void 0 ? void 0 : result.meta, data: result.result, statusCode: 200, success: true, message: "Enrolled Course Retrived Successfully !" });
    }
}));
exports.enrolledCourseControllers = {
    createEnrolledCourse,
    getMyEnrolledCourses,
    updateEnrolledCourseMarks,
};
