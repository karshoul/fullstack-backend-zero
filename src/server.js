const express = require('express'); // Commonjs
const path = require('path');
require('dotenv').config()

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

// Get the client
const mysql = require('mysql2');
// import express from 'express'; // es modules

const app = express(); // app express
const port = process.env.PORT || 8888; // Cổng chạy dự án (có thể chọn từ 0-65535)
const hostname = process.env.HOST_NAME;

// Config template engine
configViewEngine(app);

// Khai báo route
app.use('/', webRoutes);

//test connection 
// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default: 3306
    user: 'root', //default: empty
    password: '123456', //default: empty
    database: 'hoidanit',
  });

// A simple SELECT query
connection.query(
    'select * from Users u',
    function (err, results, fields) {
      console.log(">>> results= " ,results); // results contains rows returned by server
      console.log(">>> fields= " ,fields); // fields contains extra meta data about results, if available
    }
); 

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
  });


app.listen(port, hostname, () => {
    console.log(`Máy chủ đang chạy tại http://${hostname}:${port}/`);
});