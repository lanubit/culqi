import { TokenEntity } from '../../domain/entity/token.entity';
import { TokenRepository } from '../../domain/repository/token.repositry';
import TokenModel from '../model/token.schema';

export class TokenMongoRepository implements TokenRepository {
  async saveToken(token: TokenEntity): Promise<any> {
    await TokenModel.create(token);
  }
}
