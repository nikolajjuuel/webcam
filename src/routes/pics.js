import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('hello')



  // const text = `
  // SELECT * FROM pictures
  // `;

  // return db
  //   .query(text)
  //   .then((data) => data.rows)
  //   .catch((err) => console.error(this, "query failed", err.stack));

});






export default router;