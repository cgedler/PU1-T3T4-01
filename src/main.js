/**
 * Main : Este seria nuestro archivo principal
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Abr , 2025
 */

import express from 'express';
import session from 'express-session';
import cors from 'cors';
import bodyParser from 'body-parser';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import db from './config/database.js';
import User from './models/user.model.js';
import Customer from './models/customer.model.js';

import routes from './routes/main.routes.js';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(session({
    secret: 'miClaveSecretaSuperSegura',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 3600000 // Duración de la sesión: 1 hora
    }
}));

app.set('views', join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');
app.use(express.static(join(__dirname, 'public')));

app.use('/', routes);

async function main() {
    try {
        await db.sync();
        app.listen(port);
        console.log('Server is listening on port', 3000);
    } catch (error) {
        console.log('ERROR ' + error);
    }
}

main();