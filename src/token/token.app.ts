import express from 'express';
import tokenRouter from './infrastructure/route/token.route';
import mongoInit from './infrastructure/db/mongo.db';

const appToken = express();

appToken.use(tokenRouter);
mongoInit().then();

export default appToken;
