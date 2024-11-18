const v_http = require('http');
//const v_date = require('./02moduleDate')
const v_object = require('./02moduleDate');
/*
v_http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Si funciona nuestro primer servidor WEB!');
}).listen(8080);
*/

v_http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.write('Fecha y hora actual (de Javascript): ' + v_date.myDateTime());
    res.write(v_object.myJavascriptObject());
    res.end();
}).listen(8080);

