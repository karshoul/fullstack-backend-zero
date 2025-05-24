const express = require('express');
const { getHomePage, getABC } = require('../controllers/homeController');
const router = express.Router();

//router.Method('/route', handler)

router.get('/', getHomePage);
router.get('/abc', getABC);

module.exports = router; // export default - biến router đặt tên gì cũng đc nó sẽ tự động mapping tới biến xuất ra ngoài
