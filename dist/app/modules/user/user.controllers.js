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
exports.userControllers = void 0;
const user_services_1 = require("./user.services");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, student: studentData } = req.body;
        // const zodParsedData = userValidation.userValidationSchema.parse(studentData) ;
        const result = yield user_services_1.userService.createStudnetIntoDb(password, studentData);
        res.json({
            success: true,
            message: "student created success fully !",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong !",
            error: error,
        });
    }
});
exports.userControllers = {
    createStudent,
};
