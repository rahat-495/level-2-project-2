
import { Router } from "express";
import validateRequest from "../middlewares/validateRequest";
import { authValidations } from "./auth.validation";
import { authControllers } from "./auth.controllers";
import auth from "../middlewares/auth";
import { userRole } from "../user/user.constant";

const router = Router() ;

router.post('/login' , validateRequest(authValidations.loginValidationSchema) , authControllers.loginUser) ;
router.post('/refresh-token' , validateRequest(authValidations.refreshTokenValidationSchema) , authControllers.refreshToken) ;
router.post('/reset-password' , validateRequest(authValidations.resetPasswordValidationSchema) , authControllers.resetPassword) ;
router.post('/forget-password' , validateRequest(authValidations.forgetPasswordValidationSchema) , authControllers.forgetPassword) ;
router.post('/change-password' , auth(userRole.admin , userRole.faculty , userRole.student) , validateRequest(authValidations.changePasswordValidationSchema) , authControllers.changePassword) ;

export const authRoutes = router ;
