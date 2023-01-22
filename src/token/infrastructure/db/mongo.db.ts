import { connect, set } from "mongoose";

const URI = 'mongodb://localhost:27017/culqi';

const mongoInit = async () => {
  set('strictQuery', true);
  await connect(URI);
};

export default mongoInit;
