
import { promises as fs } from 'fs';
import Utils from './utils.js';

export class LogLevels {
    static info = 'INFO';
    static error = 'ERROR';
    static warn = 'WARN';
    static debug = 'DEBUG';
};

export class Logger {

    constructor() {
        this.verifyLogDirectory();
    }

    async verifyLogDirectory() {
        try {
            await fs.mkdir('./logs/', {recursive: true});
        } catch (error) {
            console.error('Error creating log directory:', error);
        }
    }

    async log(LogLevels, message) {
        try {
            const content = Utils.getTimeStamp() + ' ' + LogLevels + ' | ' + message + '\n';
            await fs.appendFile('./logs/' + Utils.getDayStamp() + '-app.log', content);
        } catch (error) {
            console.log(error);
        }
    }

};