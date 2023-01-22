import { loadFeature, defineFeature } from 'jest-cucumber';
import {
  getJsonResponse,
  URL_DECODE_CARD_TOKEN,
  EXAMPLE_CLIEND_ID
} from '../util/Helper';
import axios from 'axios';

const feature = loadFeature('../decodeCardToken.feature', {
  loadRelativePath: true,
  errors: true
});

defineFeature(feature, (test) => {
  test('Logra decodificar con éxito', ({
    given,
    when,
    then
  }) => {
    let _token: string;
    let _response: any;

    given(/^Envia token (.*) por path parametros$/, (token: string) => {
      _token = token;
    });

    when('Ejecuta decodificar token', async() => {
      const config = {
        headers: { Authorization: `Bearer ${EXAMPLE_CLIEND_ID}` }
      };

      const _url = URL_DECODE_CARD_TOKEN.replace('{token}', _token);
      _response = await axios.get(`${_url}`, config);
    });
    
    then(/^Se obtendrá el resultado (.*)$/, async (result: string) => {
      const _result = await getJsonResponse(result);
      expect(_response.data).toEqual(_result);
    });
  });

  test('Se tienen problemas para desencriptar el token', ({
    given,
    when,
    then
  }) => {
    let _token: string;
    let _response: any;

    given(/^Envia token (.*) por path parametros$/, (token: string) => {
      _token = token;
    });

    when('Ejecuta decodificar token', async() => {
      const config = {
        headers: { Authorization: `Bearer ${EXAMPLE_CLIEND_ID}` }
      };

      const _url = URL_DECODE_CARD_TOKEN.replace('{token}', _token);
      await axios.get(`${_url}`, config)
        .then((_res) => {})
        .catch((error) => {
          _response = error.response;
        });
    });
    
    then(/^Se obtendrá el resultado (.*)$/, async (result: string) => {
      const _result = await getJsonResponse(result);
      expect(_response.data).toEqual(_result);
    });
  });
});
