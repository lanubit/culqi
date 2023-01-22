import { NextFunction, Request, Response } from 'express';

const GetHeaders = async (request: Request, _response: Response, next: NextFunction) => {
  const bearer = request.header('Authorization');
  const splitBearer = bearer ? bearer.split(' ') : [];

  delete(process.env.CLIENT_ID);

  if(splitBearer[1]) {
    process.env.CLIENT_ID = splitBearer[1];
  }

  next();
}

export default GetHeaders;
