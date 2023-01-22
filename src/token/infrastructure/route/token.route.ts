import { Router } from 'express';
import { TokenService } from '../../application/token.service';
import { TokenController } from '../controller/token.controller';
import { TokenMongoRepository } from '../repository/token.mongo.repository';
import GetHeaders from '../middleware/header.middleware';
import validateGenerateTokenInput from '../../application/validator/input/generateToken.input';

const tokenRouter = Router();

const tokenMongoRepository = new TokenMongoRepository();

const tokenService = new TokenService(tokenMongoRepository);

const tokenController = new TokenController(tokenService);

tokenRouter
  .use(GetHeaders)
  .post('/tokens', validateGenerateTokenInput, tokenController.generate);

export default tokenRouter;