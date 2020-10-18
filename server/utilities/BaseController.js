import express from 'express';

// Handles the mount path
export default class BaseController {
    // handles creating the mount path and instantiating the router
    // takes mount path
    constructor(mount) {
        // checks if it is a type of string
        // handles whether it has a forward slash or not
        if (typeof mount != 'string') {
            throw new Error('Unable to register controller')
        }
        // register for mount path. Label on door to the main hallway
        if (mount[0] != '/') {
            mount = '/' + mount;
        }
        this.mount = mount;
        this.router = express.Router();
    }
}