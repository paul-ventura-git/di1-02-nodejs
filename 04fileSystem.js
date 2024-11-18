const v_http = require('http');
const v_fs = require('fs');

v_http.createServer(function (req, res) {
    v_fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/HTML'});
        res.write(data);
        return res.end();
    });
}).listen(8080);