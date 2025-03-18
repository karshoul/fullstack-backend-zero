const express = require('express'); // Commonjs
// import express from 'express'; // es modules

const app = express(); // app express
const hostname = '127.0.0.1'; // localhost - địa chỉ máy chủ local trên máy tính của bạn (có thể thay đổi từ 1-255 để test trên máy tính)
const port = 3000; // Cổng chạy dự án (có thể chọn từ 0-65535)

// Khai báo route
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, hostname, () => {
    console.log(`Máy chủ đang chạy tại http://${hostname}:${port}/`);
});