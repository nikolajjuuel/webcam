import { getPictures } from '../lib/db_queries/get_pictures'

export const pictureController = (req, res) => {
  getPictures()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
}
