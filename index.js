const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.engine('ejs', ejsMate)
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('home')
})


app.post('/', (req, res) => {
    console.log(req.body)
})


app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('Errorpage', { err })
})

const port = 3000
app.listen(port, () => {
    console.log('serving on port 3000')
})