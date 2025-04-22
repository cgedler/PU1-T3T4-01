

import { Router } from 'express';
const router = Router();

import isAuthenticated from '../middleware/session.js';
import { get, getById, insert, update, eliminate, create, edit } from '../controllers/customers.controller.js';

router.get('/create', isAuthenticated, create);
router.get('/:id/edit', isAuthenticated, edit);
router.get('/', isAuthenticated, get);
router.get('/:id', isAuthenticated, getById);
router.post('/', isAuthenticated, insert);
router.post('/:id', isAuthenticated, update);
router.post('/:id/delete', isAuthenticated, eliminate);

export default router;