import { NextFunction, Request, Response } from 'express';
import CustomErrorEntity from '../../../common/customError.entity';

const CustomError = async (error: CustomErrorEntity, _request: Request, response: Response, _next: NextFunction) => {
  if(error) {
    response.status(error.httpStatus ?? 500).json({
      status: 'error',
      message: error.message,
      detail: error.detail
    });
  }
}

export default CustomError;