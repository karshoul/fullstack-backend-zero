// Mục đích của file này sẽ cấu hình view engine cho dự án
const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    // test path
    console.log(">>> check path: ", path.join('./src', 'views'));
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs')

    // config static file
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;

