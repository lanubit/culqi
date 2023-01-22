import * as fs from 'fs';

const getPayloadInput = async (payload: string): Promise<object> => {
  const data = await fs.readFileSync(require.resolve(`../input/${payload}.json`), 'utf8');
  return JSON.parse(data);
};

const getJsonResponse = async (payload: string): Promise<object> => {
  const data = await fs.readFileSync(require.resolve(`../output/${payload}.json`), 'utf8');
  return JSON.parse(data);
};

const EXAMPLE_CLIEND_ID = 'client_id_example';
const URL_GENERATE_TOKEN = 'http://localhost:3000/tokens';
const URL_DECODE_CARD_TOKEN = 'http://localhost:3000/tokens/{token}/card-decode';

export {
  getPayloadInput,
  getJsonResponse,
  EXAMPLE_CLIEND_ID,
  URL_GENERATE_TOKEN,
  URL_DECODE_CARD_TOKEN
};
