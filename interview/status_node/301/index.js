var http = require('http');

var server = http.createServer(function(req,res) {
  // 响应头
  res.writeHead(301,{'Location':'http://itbilu.com/'});
  // 状态码属于http协议的头部
  console.log(res._header);
  res.end();
});
server.listen(3000);
