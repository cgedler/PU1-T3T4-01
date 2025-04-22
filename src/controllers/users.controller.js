

import { Logger, LogLevels } from '../middleware/logger.js';
const logger = new Logger();

import userService from '../services/user.service.js';


export const get = async (req, res) => {
    try {
        const result = await userService.getAll();
        return res.render('users/list', {title: 'List of Users', user: req.session.user.username || null, results: result, message: null});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await userService.getById(id);
        return res.render('users/detail', {title: 'Detail of the User', user: req.session.user.username || null, results: result});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }

};

export const insert = async (req, res) => {
    try {
        logger.log(LogLevels.info, 'Método insert user.controller');
        const result = await userService.create(req.body);
        const result_list = await userService.getAll();
        return res.render('users/list', {title: 'List of Users', user: req.session.user.username || null, results: result_list, message: 'create'});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }
};

export const update = async (req, res) => {
    try {
        logger.log(LogLevels.info, 'Método update user.controller');
        const id = req.params.id;
        const result = await userService.update(id, req.body);
        const result_list = await userService.getAll();
        return res.render('users/list', {title: 'List of Users', user: req.session.user.username || null, results: result_list, message: 'update'});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }
};

export const eliminate = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await userService.eliminate(id);
        const result_list = await userService.getAll();
        return res.render('users/list', {title: 'List of Users', user: req.session.user.username || null, results: result_list, message: 'delete'});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }
};


export const create = async (req, res) => {
    try {
        logger.log(LogLevels.info, 'Método create user.controller');
        return res.render('users/create', {title: 'Create Users', user: req.session.user.username || null});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }
};

export const edit = async (req, res) => {
    try {
        logger.log(LogLevels.info, 'Método edit user.controller');
        const id = req.params.id;
        const result = await userService.getById(id);
        return res.render('users/edit', {title: 'Edit the User', user: req.session.user.username || null, results: result});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }
};