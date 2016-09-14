/**
 * Created by L on 2016-09-07.
 */
// link to the node http library
var http = require('http');


// use callback to start an http sever
http.createServer(function(request,response){
    // start the http sever with access to the request & resopnse objects
    response.writeHead(200); //request OK
    response.end('First node page');
}).listen(3000);

console.log('Sever running on port 3000');