import express from 'express';
import { getAllController, postOneController } from '../controllers/index.js';

const router = express.Router();

router.get('/', getAllController);
router.post('/', postOneController)



export default router;