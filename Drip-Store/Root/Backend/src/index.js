import express from 'express';
import cors from 'cors';
import fs from 'fs';
import https from 'https';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const options = {
  key: fs.readFileSync('/path/to/private-key.pem'),
  cert: fs.readFileSync('/path/to/certificate.pem')
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});