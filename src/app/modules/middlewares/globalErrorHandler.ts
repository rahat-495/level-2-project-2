
import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err : any , req : Request , res : Response , next : NextFunction) : any => {
    const statusCode = err.statusCode || 500 ;
    const message = err.message || "some thing wen't wrong" ;
    return res.status(statusCode).json({
        success : false ,
        message ,
        error : err ,
    })
}

export default globalErrorHandler ;
