import express from 'express';
import bp from "body-parser";
import DbContext from "./database/dbconfig";
import FirstController from "./controllers/FirstController.js";

let server = express();
let port = 3000;

//* This will fail if you do not have a connection string
DbContext.connect();

server.use(bp.json());

//* Register Routers
server.use('', new FirstController().router);


//* Error Handlers
server.use((req, res, next) => {
    res.status(404).send("Route Not Found")
});

server.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send(err);
});

//* Server is listening on port
server.listen(port, () => {
    console.log('server is running on port:', port);
});