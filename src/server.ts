import express from 'express';
import Mongoose from 'mongoose';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

Mongoose.connect('mongodb+srv://user:Password123@cluster0.gawoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = Mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.listen(3333, () => {
  console.log('Server stated on port 3333.');
});