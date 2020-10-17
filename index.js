const express = require('express');
const server = express();
const port = 3000;


//if user hits our page, want them to get a specific response, * is wildcard (all routes)
server.get('*', (request, response, next) => {
    response.status(404).send('<h1> 404 SORRY PAGE NOT FOUND </h1>');
})


server.listen(port, () => {
    console.log('server is running on port:', port);
});