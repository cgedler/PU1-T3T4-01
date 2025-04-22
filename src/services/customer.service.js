

import { Logger, LogLevels } from '../middleware/logger.js';
const logger = new Logger();
import db from '../config/database.js';
import Customer from '../models/customer.model.js';


export async function getAll() {
    return await Customer.findAll();
}

export async function getById(id) {
    return await getOne(id);
}

export async function create(params) {
    if (await Customer.findOne({ where: { email: params.email } })) {
        throw 'Customer :"' + params.id + '" is already registered';
    }
    const customer = new Customer(params);
    await customer.save();
    return customer;
}

export async function update(id, params) {
    const customer_old = await getOne(id);
    customer_old.name = params.name;
    customer_old.surname = params.surname;
    customer_old.phone = params.phone;
    customer_old.email = params.email;
    await customer_old.save();
    return customer_old;
}

export async function eliminate(id) {
    const customer = await Customer.destroy({
        where: {
            id
        }
    });
    if (!customer) throw 'Customer not found';
    return customer;
}

async function getOne(id) {
    const customer = await Customer.findByPk(id);
    if (!customer) throw 'Customer not found';
    return customer;
}

export default { getAll, getById, create, update, eliminate };