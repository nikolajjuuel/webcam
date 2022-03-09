import express from 'express';
import picRoutes from './pics.js'

const router = express.Router();

router.use('/pics', picRoutes);


export default router;