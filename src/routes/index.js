import express from 'express';
import { getAllController, test } from '../controllers/index.js';

const router = express.Router();

router.use('/', getAllController)


export default router;