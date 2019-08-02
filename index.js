var http = require('http');


http.createServer(function (req, res) {
    var dateNow = new Date();
  res.write('' + dateNow);
  res.end();
}).listen(8080); 