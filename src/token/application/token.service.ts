import jwt from 'jsonwebtoken';
import { TokenRepository } from '../domain/repository/token.repositry';
import { CardValue } from '../domain/valueObject/card.value';
import { TokenValue } from '../domain/valueObject/token.value';

const SECRET = `${process.env.CLIENT_ID}`;
const EXPIRES_JWT_IN = 60;

export class TokenService {

  constructor(private readonly tokenRepository: TokenRepository) {}

  async generateToken({
    cardNumber,
    cvv,
    expirationMonth,
    expirationYear,
    email
  }: {
    cardNumber: number,
    cvv: number,
    expirationMonth: string,
    expirationYear: string,
    email: string,
  }) {
    const cardValue = new CardValue({
      cardNumber,
      cvv,
      expirationMonth,
      expirationYear,
      email
    });

    const jwToken = await this._buildJwt({ payload: cardValue });
    const tokenEntity = new TokenValue({ token: jwToken });
    await this.tokenRepository.saveToken(tokenEntity);

    return jwToken;
  }

  async _buildJwt(payload: object) {
    return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_JWT_IN });
  }
  
  /*async decryptToken(token:string) {
    const token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkpvaG4gRG9lIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    try {
      const decoded = jwt.verify(token, SECRET);
      console.log(decoded);
    } catch (err) {
      console.log(err);
    }

    console.log(token2)
  }

  async _validateToken(token: string) {
    console.log(token)
  }*/
}
