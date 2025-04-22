

import { Logger, LogLevels } from '../middleware/logger.js';
const logger = new Logger();


export const get = async (req, res) => {
    try {
        logger.log(LogLevels.info, 'Método GET logout.controller');
        req.session.destroy((err) => {
            if (err) {
                console.error('Error al destruir la sesión:', err);
                res.send('Error al cerrar sesión.');
            } else {
                return res.render('login', { title: 'Login Page' });
            }
        });
    } catch (error) {
        logger.log(LogLevels.error, 'Método GET logout.controller');
        return res.status(500).json({message: "Error: " + error.message});
    }
};