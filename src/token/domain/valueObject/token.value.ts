import { TokenEntity } from '../entity/token.entity';

export class TokenValue implements TokenEntity {
  token: string;
  
  constructor({ token }: { token: string }) {
    this.token = token;
  }
}
