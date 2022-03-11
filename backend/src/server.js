import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index.js';
import { client } from '../utils/db.js'
export const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(routes)

const PORT = 8080;

export const start = async () => {
  try {
    await client.connect(() => {
      console.log('postgreSQL db connected ')
    });
    app.listen(PORT, () => {
      console.log(`listening on http://localhost:${PORT}`)
    })
  } catch (e) {
    console.error(e);
  }
}