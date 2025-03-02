const http = require('http');

const hostname = '127.0.0.1'; //localhost - quy định trong máy tính của chúng ta (có thể thay đổi từ 1 - 255 có thể test tại máy tính)
const port = 3000; // Nơi chạy dự án (chọn từ 0 - 65355)

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'Text/plan');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`server running at http:/${hostname}:${port}/`);
});
