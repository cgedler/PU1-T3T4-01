

import { Router } from 'express';
import { get } from '../controllers/index.controller.js';
import login from './login.routes.js';
import logout from './logout.routes.js';
import customers from './customers.routes.js';
import users from './users.routes.js';

const router = Router();

router.get('/', get);
router.use('/', login);
router.use('/', logout);
router.use('/customers', customers);
router.use('/users', users);

router.get('/dashboard', (req, res) => res.render('dashboard', { title: 'Dashboard', user: req.session.user.username || null  }));
router.get('/about', (req, res) => res.render('about', { title: 'About...', user: req.session.user.username || null  }));
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact', user: req.session.user.username || null  }));

export default router;