import { client } from "../../utils/db.js";

const getAllQuery = {
  text: 'SELECT * FROM pictures',
  values: []
}

const { text, values } = getAllQuery;

export const getAll = async function () {
  try {
    const res = await client.query(text)
    return res.rows;
  } catch (err) {
    console.log(err.stack);
  }

};

const postOneQuery = {
  text: 'INSERT INTO pictures (pic_url) VALUES($1)',
  values: ['post test']
}

export const postOne = async function () {
  try {
    const res = await client.query(postOneQuery)
    return res.rows;
  } catch (err) {
    console.log(err.stack);
  }

};