import express from 'express';

export default class FirstController {
    constructor() {
        this.router = express.Router() 
            .get('', this.getAll)
    }
    getAll(req, res, next) {
        res.send('All Content Here');
    }
}