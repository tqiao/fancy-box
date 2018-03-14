var http = require('http');  
  
var hostname = '144.202.123.52';  
var port = 8088;  
  
var server = http.createServer(function(req, res) {  
    // res.writeHead(200, {'Content-Type': 'text/html'});    
    // res.writeHead(200, {'Content-Type': 'text/plain'});    
    res.statusCode = 200;  
    res.setHeader('Content-Type', 'text/html');  
    // res.getHeader('content-type')  
  
    res.write('<head><meta charset="utf-8"/></head>');  
    // res.charset = 'utf-8';   不行  
  
    var htmlDiv = '<div>Test Div</div>';  
    res.write('<b>Node.js Server...</b>');  
    res.write(htmlDiv);  
  
    res.end('<h1>Hello world!</h1>');  
});  
  
server.listen(port, hostname, function() {  
    console.log('Server running at http://${hostname}:${port}/');  
    console.log('Server running at http://%s:%s', hostname, port);  
    // console.log('Server running at http://' + hostname + ':' + port + '/');  
}); 
