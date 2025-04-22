


import { Logger, LogLevels } from '../middleware/logger.js';
const logger = new Logger();

import userService from '../services/user.service.js';

export const get = async (req, res) => {
    try {
        logger.log(LogLevels.info, 'Método GET login.controller');
        return res.render('login', {title: 'Login Page'});
    } catch (error) {
        logger.log(LogLevels.error, 'Método GET login.controller');
        return res.status(500).json({message: "Error: " + error.message});
    }
};


export const post = async (req, res, next) => {
    try {
            logger.log(LogLevels.info, 'Método POST login.controller');
            const username = req.body.username;
            const password = req.body.password;
            if (validateParam(username) & validateParam(password)) {
                const user = await userService.login(req.body);
                if (user) {
                    req.session.isLoggedIn = true;
                    req.session.user = { username: username };
                    return res.render('dashboard', { title: 'Página Principal', user: username });
                } else {
                    res.send('Credenciales inválidas.');
                }
            } else {
                logger.log(LogLevels.error, 'Error: The parameters are empty or null');
                return res.status(400).json({ message: "Error: The parameters are empty or null"});
            }
    } catch (error) {
        logger.log(LogLevels.error, 'Método POST login.controller');
        return res.status(500).json({ message: "Error: " + error.message });
    }
};


function validateParam(param) {
    if (!param) {
        return false;
    } else if (typeof param === "string" && param.trim().length === 0) {
        return false;
    } else if (param === null) {
        return false;
    } else {
        return true;
    }
}