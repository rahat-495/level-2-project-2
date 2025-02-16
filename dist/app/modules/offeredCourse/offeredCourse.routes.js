"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offeredCourseRoutes = void 0;
const express_1 = require("express");
const offeredCourse_controllers_1 = require("./offeredCourse.controllers");
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const offeredCourse_validations_1 = require("./offeredCourse.validations");
const auth_1 = __importDefault(require("../middlewares/auth"));
const user_constant_1 = require("../user/user.constant");
const router = (0, express_1.Router)();
router.get('/', offeredCourse_controllers_1.offeredCourseControllers.getAllOfferdCourses);
router.get('/my-offered-courses', (0, auth_1.default)(user_constant_1.userRole.student), offeredCourse_controllers_1.offeredCourseControllers.getMyOfferedCourses);
router.get('/:id', offeredCourse_controllers_1.offeredCourseControllers.getSingleOfferedCourse);
router.delete('/:id', offeredCourse_controllers_1.offeredCourseControllers.deleteOfferedCourse);
router.patch('/:id', (0, validateRequest_1.default)(offeredCourse_validations_1.offeredCourseValidations.updateOfferedCourseValidation), offeredCourse_controllers_1.offeredCourseControllers.updateOfferedCourse);
router.post('/create-offered-course', (0, validateRequest_1.default)(offeredCourse_validations_1.offeredCourseValidations.createOfferedCourseValidation), offeredCourse_controllers_1.offeredCourseControllers.createOfferedCourse);
exports.offeredCourseRoutes = router;
