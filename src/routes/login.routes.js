

import { Router } from 'express';
const router = Router();

import { get, post } from '../controllers/login.controller.js';

router.get('/login', get);
router.post('/login', post);

export default router;