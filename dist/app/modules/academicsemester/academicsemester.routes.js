"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemesterRoutes = void 0;
const express_1 = require("express");
const academicSemester_controllers_1 = require("./academicSemester.controllers");
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const academicSemester_validation_1 = require("./academicSemester.validation");
const router = (0, express_1.Router)();
router.post('/create-academic-semester', (0, validateRequest_1.default)(academicSemester_validation_1.academicSemesterValidations.createAcademicSemesterValidationSchema), academicSemester_controllers_1.academicSemesterControllers.createAcademicSemester);
router.get('/get-all-academic-semester', academicSemester_controllers_1.academicSemesterControllers.getAllAcademicSemester);
router.get('/get-academic-semester/:semesterId', academicSemester_controllers_1.academicSemesterControllers.getAcademicSemester);
router.patch('/update-academic-semester/:semesterId', (0, validateRequest_1.default)(academicSemester_validation_1.academicSemesterValidations.updateAcademicSemesterValidationSchema), academicSemester_controllers_1.academicSemesterControllers.updateAcademicSemester);
exports.academicSemesterRoutes = router;
