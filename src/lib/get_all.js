import { client } from "../../utils/db.js";

const query = {
  text: 'SELECT * FROM pictures',
  values: []
}

const { text, values } = query;

export const getAll = async function () {
  try {
    const res = await client.query(text)
    return res.rows;
  } catch (err) {
    console.log(err.stack);
  }

};