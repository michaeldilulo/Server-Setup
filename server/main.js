import express from 'express';
//TODO import Startup from './Startup';
//TODO import DbContext from './database/DbConfig'; 

const application = express();
const port = process.env.PORT || 3000;

//TODO Startup.ConfigureGlobalMiddleware(application);
//TODO Startup.ConfigureRoutes(application);

//TODO DbContext.connect();

application.listen(port, () => {
    console.log('Your Server Is Running On Port: ', port);
})