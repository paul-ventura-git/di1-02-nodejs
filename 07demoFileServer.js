const v_http = require('http');
const v_url = require('url');
const v_fs = require('fs');

// http://localhost:8080/default.htm
v_http.createServer(function (req, res) {
    const v_q = v_url.parse(req.url, true);
    const v_filename = "." + v_q.pathname;
    v_fs.readFile(v_filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);