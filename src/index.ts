import express from 'express';
import cors from 'express';
import CustomError from './token/infrastructure/middleware/error.middleware';
import appToken from './token/token.app';

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(appToken);

app.get('/alive', (_req, res) => {
  console.log('Proyecto up!')
  res.send({ alive: true })
});

app.use(CustomError);

app.listen(PORT, () => console.log(`Ejecutandose en el puerto ${PORT}`));
