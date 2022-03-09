import { client } from '../../server.js'

const query = {
  text: 'SELECT * FROM pictures',
}

const { text } = query;

export const test = async function () {
  try {
    const res = await client.query(text)
    return res.rows;
  } catch (err) {
    console.log(err.stack);
  }

};
