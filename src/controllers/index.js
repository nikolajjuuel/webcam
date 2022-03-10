import { getAll } from "../lib/get_all.js";


export const getAllController = (req, res) => {
  getAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
}

export const test = (req, res) => {
  res.send('test')
}