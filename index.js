if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
const nodemailer = require("nodemailer");


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

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.USER,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message

    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error')
        } else {
            console.log('Email Sent' + info.response)
            res.send('success')
        }
    })
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