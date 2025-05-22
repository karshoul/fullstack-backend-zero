const express = require('express'); // Commonjs
const path = require('path');
require('dotenv').config()

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
// import express from 'express'; // es modules

const app = express(); // app express
const port = process.env.PORT || 8888; // Cổng chạy dự án (có thể chọn từ 0-65535)
const hostname = process.env.HOST_NAME;

// Config template engine
configViewEngine(app);

// Khai báo route
app.use('/', webRoutes);


app.listen(port, hostname, () => {
    console.log(`Máy chủ đang chạy tại http://${hostname}:${port}/`);
});