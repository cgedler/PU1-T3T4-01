

import { Router } from 'express';
const router = Router();

import { get } from '../controllers/logout.controller.js';

router.get('/logout', get);

export default router;