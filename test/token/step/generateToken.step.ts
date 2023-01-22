import { loadFeature, defineFeature } from 'jest-cucumber';
import { TokenMongoRepository } from '../../../src/token/infrastructure/repository/token.mongo.repository';
import {
  getPayloadInput,
  getJsonResponse,
  URL_GENERATE_TOKEN,
  EXAMPLE_CLIEND_ID
} from '../util/Helper';
import axios from 'axios';

const feature = loadFeature('../generateToken.feature', {
  loadRelativePath: true,
  errors: true
});

defineFeature(feature, (test) => {
  test('Logra generar token correctamente', ({
    given,
    and,
    when,
    then
  }) => {
    let bodyParameters: object;
    let response: any;

    given(/^Envia datos de tarjeta payload (.*)$/, async (payload: string) => {
      bodyParameters = await getPayloadInput(payload);
    });
    
    and('Todos los datos son correctos', () => {
      const tokenMongoRepository = new TokenMongoRepository();
      jest.spyOn(tokenMongoRepository, 'saveToken');
    });

    when('Ejecuta generar token', async() => {
      const config = {
        headers: { Authorization: `Bearer ${EXAMPLE_CLIEND_ID}` }
      };
      response = await axios.post(URL_GENERATE_TOKEN, bodyParameters, config);
    });
    
    then(/^El objeto respuesta tendrá el atributo key (.*)$/, (key: string) => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty(key);
    });
  });

  test('Se envian parametros de entradas incorrectos o Bearer vacío', ({
    given,
    when,
    then
  }) => {
    let bodyParameters: object;
    let _response: any;

    given(/^Envia datos de tarjeta payload (.*)$/, async (payload: string) => {
      bodyParameters = await getPayloadInput(payload);
    });
    
    when('Ejecuta generar token', async() => {
      try {
        await axios.post(URL_GENERATE_TOKEN, bodyParameters);
      } catch ({ response } ) {
        _response = response;
      }
    });
    
    then(/^Se obtendrá el resultado (.*) de validación$/, async (result: string) => {
      const _result = await getJsonResponse(result);
      expect(_response.data).toEqual(_result);
    });
  });
});
