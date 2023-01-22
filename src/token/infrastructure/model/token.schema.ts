import { Schema, model } from 'mongoose';

const TokenSchema = new Schema(
  {
    token: {
      type: String
    }
  }
);

const TokenModel = model('token', TokenSchema);

export default TokenModel;
