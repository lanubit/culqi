import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

const validateHelper = (request: Request, _response: Response, next: NextFunction) => {
  try{
    validationResult(request).throw();
    next();
  } catch ({ errors }) {
    next({ httpStatus: 403, message: 'Error al validar parámetros de entrada.', detail: errors })
  }
}

export default validateHelper;
