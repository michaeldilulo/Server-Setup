// Entry Point of Application

//configuring this file allows you to load your .env into a process.env file (deployment)
require('dotenv').config();

// Dependency loader used to support ECMAScript Modules in Node 6+
require = require('esm')(module)

// Exports modules for use in Main.js, where the server application code is listening 
module.exports = require('./server/main');