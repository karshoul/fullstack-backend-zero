const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    // res.send('Hello world')
    res.render('sample.ejs') // Gọi tới file sample.ejs trong thư mục views
})

router.get('/abc', (req, res) => {
    res.send('Test 123')
})

module.exports = router; // export default - biến router đặt tên gì cũng đc nó sẽ tự động mapping tới biến xuất ra ngoài
