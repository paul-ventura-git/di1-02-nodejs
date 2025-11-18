const v_http = require('http');
const v_url = require('url');

v_http.createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, {'Content-Type': 'text/html'});
    const q = v_url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);

//http://localhost:8080/?year=2017&month=July