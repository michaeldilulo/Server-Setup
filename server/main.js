import express from 'express';
import Startup from './Startup';
import DbContext from './database/DbConfig';

// Creates a new instance of express for running the server
const application = express();
// Port is set to .env PORT and if not available, uses 3000;
const port = process.env.PORT || 3000;

Startup.ConfigureGlobalMiddleware(application);
Startup.ConfigureRoutes(application);

// Connects to MongoDB Atlas (Database)
DbContext.connect();

// Application.listen is server running live on that designated port, or typically 3000;
application.listen(port, () => {
    console.log('Your Server is listening on port: ', port);
})