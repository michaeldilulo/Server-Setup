import express from 'express';
// import Startup from './Startup';
// import DbContext from './database/DbConfig';

const application = express();
const port = process.env.PORT || 3000;

// Startup.ConfigureGlobalMiddleware(application);
// Startup.ConfigureRoutes(application);

application.listen(port, () => {
    console.log("Your Server is running on port: ", port)
})