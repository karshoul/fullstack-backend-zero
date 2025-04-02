const express = require('express'); // Commonjs
const path = require('path');
require('dotenv').config()


// import express from 'express'; // es modules

const app = express(); // app express
const port = process.env.PORT || 8888; // Cổng chạy dự án (có thể chọn từ 0-65535)
const hostname = process.env.HOST_NAME;

// Config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// Khai báo route
app.get('/', (req, res) => {
    // res.send('Hello world')
    res.render('sample.ejs') // Gọi tới file sample.ejs trong thư mục views
})

app.get('/abc', (req, res) => {
    res.send('Test')
})

app.listen(port, hostname, () => {
    console.log(`Máy chủ đang chạy tại http://${hostname}:${port}/`);
});