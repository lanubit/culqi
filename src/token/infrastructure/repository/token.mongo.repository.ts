import { TokenEntity } from '../../domain/entity/token.entity';
import { TokenRepository } from '../../domain/repository/token.repositry';
import TokenModel from '../model/token.schema';

export class TokenMongoRepository implements TokenRepository {
  async saveToken(token: TokenEntity): Promise<any> {
    /**
     * Controla el error evitar que la petición falle
     */
    await TokenModel.create(token)
      .then(() => console.log('TOKEN GUARDADO EN MONGO'))
      .catch((error) => console.log('--- ERROR AL GUARDAR EN MONGO', error));
  }
}
