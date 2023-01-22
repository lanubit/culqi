import jwt from 'jsonwebtoken';
import { TokenRepository } from '../domain/repository/token.repositry';
import { CardValue } from '../domain/valueObject/card.value';
import { ProtectedCardValue } from '../domain/valueObject/protectedCard.value';
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
  }) : Promise<string> {
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

  async getProtectedCard({ token }: { token: string }): Promise<ProtectedCardValue> {
    const { payload } = await this._decodeJwt(token) as { payload: object };
    const {
      cardNumber,
      expirationMonth,
      expirationYear,
      email
    } = payload as {
      cardNumber: number,
      expirationMonth: string,
      expirationYear: string,
      email: string
    };
    return new ProtectedCardValue({ cardNumber, expirationMonth, expirationYear, email });
  }

  async _decodeJwt(token: string) {
    try {
      return jwt.verify(token, SECRET);
    } catch (error) {
      let message = 'Error al decodifiar token.';

      if (error instanceof jwt.JsonWebTokenError) {
        message = 'El token ingresado no es válido.';
      }

      if (error instanceof jwt.TokenExpiredError) {
        message = 'El token ha expirado.';
      } 

      throw { message, detail: error };
    }
  }

  async _buildJwt(payload: object) {
    return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_JWT_IN });
  }
}
