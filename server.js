const http = require('http');  //加载http模块

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {   //req请求，res回应
  res.statusCode = 200;       //状态码200,代表成功
  res.setHeader('Content-Type', 'text/plain');   //
  res.end('Hello Node.js\n');   //返回文字Hello Node.js
});

server.listen(port, hostname, () => {     //监听请求
  console.log(`Server running at http://${hostname}:${port}/`);
});
