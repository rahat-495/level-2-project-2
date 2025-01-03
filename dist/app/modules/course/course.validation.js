"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseValidations = void 0;
const zod_1 = require("zod");
const preRequisiteCoursevalidationSchema = zod_1.z.object({
    course: zod_1.z.string(),
    isDeleted: zod_1.z.boolean().optional(),
});
const createCourseValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        prefix: zod_1.z.string(),
        code: zod_1.z.number(),
        credits: zod_1.z.number(),
        preRequisiteCourses: zod_1.z.array(preRequisiteCoursevalidationSchema),
    })
});
exports.courseValidations = {
    createCourseValidation,
};
