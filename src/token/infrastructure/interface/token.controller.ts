import { NextFunction, Request, Response } from 'express';
import { TokenService } from '../../application/token.service';
export class TokenController {

  constructor(private tokenService: TokenService) {
    this.generate = this.generate.bind(this);
    this.getCardFromToken = this.getCardFromToken.bind(this);
  }

  public async generate(request: Request, response: Response, next: NextFunction) {
    try {
      if(!process.env.CLIENT_ID) {
        throw new Error('Token bearer no puede ser vacío.');
      }

      const { body } = request;
      const token = await this.tokenService.generateToken(body);
      response.send({ token });
    } catch(error) {
      next(error);
    }
  }

  public async getCardFromToken(request: Request, response: Response, next: NextFunction) {
    try {
      if(!process.env.CLIENT_ID) {
        throw new Error('Token bearer no puede ser vacío.');
      }

      const { params } = request;
      const card = await this.tokenService.getProtectedCard({token: params.token});
      response.send({ card });
    } catch(error) {
      next(error);
    }
  }
}
