

import { Logger, LogLevels } from '../middleware/logger.js';
const logger = new Logger();

import customerService from '../services/customer.service.js';


export const get = async (req, res) => {
    try {
        const result = await customerService.getAll();
        return res.render('customers/list', {title: 'List of Customers', user: req.session.user.username || null, results: result, message: null});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await customerService.getById(id);
        return res.render('customers/detail', {title: 'Customer Detail', user: req.session.user.username || null, results: result});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }

};

export const insert = async (req, res) => {
    try {
        logger.log(LogLevels.info, 'Método insert customer.controller');
        const result = await customerService.create(req.body);
        const result_list = await customerService.getAll();
        return res.render('customers/list', {title: 'List of Customers', user: req.session.user.username || null, results: result_list, message: 'create'});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await customerService.update(id, req.body);
        const result_list = await customerService.getAll();
        return res.render('customers/list', {title: 'List of Customers', user: req.session.user.username || null, results: result_list, message: 'update'});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " +  error.message });
    }
};

export const eliminate = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await customerService.eliminate(id);
        const result_list = await customerService.getAll();
        return res.render('customers/list', {title: 'List of Customers', user: req.session.user.username || null, results: result_list, message: 'delete'});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }
};

export const create = async (req, res) => {
    try {
        logger.log(LogLevels.info, 'Método create customer.controller');
        return res.render('customers/create', {title: 'Create Customer', user: req.session.user.username || null});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }
};

export const edit = async (req, res) => {
    try {
        logger.log(LogLevels.info, 'Método edit customer.controller');
        const id = req.params.id;
        const result = await customerService.getById(id);
        return res.render('customers/edit', {title: 'Edit the Customer', user: req.session.user.username || null, results: result});
    } catch (error) {
        logger.log(LogLevels.error, 'Error: ' + error);
        return res.status(500).json({ message: "Error: " + error.message });
    }
};