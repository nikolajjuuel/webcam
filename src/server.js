import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index.js'
import pg from 'pg';


import { test } from './lib/db_queries/get_pictures.js'

import { dbParams } from '../database/db.js'
const { Client } = pg;
export const client = new Client(dbParams);
client.connect()


export const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
// app.use(routes)

app.get('/', (req, res) => {
  // res.send('jellp')
  test()
    .then((data) => (
      res.status(200).json(data)
    ))
  // client.query('SELECT * FROM pictures;', (err, res) => {
  //   console.log(res.rows);
  // })
})


export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}


