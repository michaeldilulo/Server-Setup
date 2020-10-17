const express = require('express');
const server = express();
const port = 3000;


// MIDDLEWARE how requests are handled when I want to deal with them
// 200: Good to go
// How to register routes in between
server.get('/test', (req, res, next) => {
    res.status(200).send('Success!')
});




// if user hits our page, want them to get a specific response, * is wildcard (all routes)
// default error handler
server.get('*', (request, response, next) => {
    response.status(404).send('<h1> 404 SORRY PAGE NOT FOUND </h1>');
});


server.listen(port, () => {
    console.log('server is running on port:', port);
});