import express from 'express';

const app = express();

app.use(express.json());

app.get('/nutemployee', (request, response) => {
  return response.status(400).json({ message: 'hello world' });
});

app.listen(3333, () => {
  console.log('Server stated on port 3333.');
});