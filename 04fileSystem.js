const v_http = require('http');
const v_fs = require('fs'); // file system

v_http.createServer(function (req, res) {
    v_fs.readFile('index.html', function(err, data) {
        //console.log(data)
        res.writeHead(200, {'Content-Type': 'text/HTML'});
        res.write(data);
        return res.end();
    });
}).listen(8080);