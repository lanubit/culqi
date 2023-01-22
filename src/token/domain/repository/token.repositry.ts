import { TokenEntity } from '../entity/token.entity';

export interface TokenRepository {
  saveToken(token: TokenEntity): Promise<any>;
}