

const getHomePage = (req, res) => {
    res.render('sample.ejs') // Gọi tới file sample.ejs trong thư mục views
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

module.exports = {
    getHomePage,
    getABC,
}