

import { Logger, LogLevels } from '../middleware/logger.js';
const logger = new Logger();


export const get = async (req, res) => {
    try {
        logger.log(LogLevels.info, 'Método GET index.controller');
        return res.render('index', { title: 'Página Principal' });
    } catch (error) {
        logger.log(LogLevels.error, 'Método GET index.controller');
        return res.status(500).json({ message: "Error: " + error.message });
    }
};