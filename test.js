 var server = require('http').createServer(onRequest);
 server.on('connect', onConnect);
 server.listen(8080);

 function onRequest(req, res) {
    console.log(req)
 }

 function onConnect(request, socketRequest, head) {
     console.log(request)
 }
 