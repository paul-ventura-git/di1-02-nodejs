// npm install node-color-log@latest --save
// npm install upper-case
// npm install -g nodemon

const v_http = require('http');
const v_uc = require('upper-case');
const logger = require('node-color-log');

v_http.createServer(function (req, res) {
    console.time("Duracion de operaciones");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(v_uc.upperCase("Hello World!"));
    logger.color('green').bgColor('black').log("Server is listening!...");
    logger.color('blue').bgColor('black').log("Server is listening!...");
    logger.color('red').bgColor('black').log("Server is listening!...");
    logger.color('magenta').bgColor('black').log("Server is listening!...");
    console.timeEnd("Duracion de operaciones");
    res.end();
}).listen(8080);