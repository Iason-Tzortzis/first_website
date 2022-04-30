const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
const nodemailer = require("nodemailer");
const helmet = require("helmet");

require('dotenv').config();

// app.enable('trust proxy')
// app.use(function (request, response, next) {

//     if (process.env.ENVIRONMENT != 'development' && !request.secure) {
//         return response.redirect("https://" + request.headers.host + request.url);
//     }

//     next();
// })
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.engine('ejs', ejsMate)
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

const srcUrls = [
    "cdn.jsdelivr.net",
    "code.jquery.com",
]; //Deconstruct the array using the ...someSrcUrls command in the options

const stylesUrls = [
    "cdn.jsdelivr.net",
    "fonts.googleapis.com"
];

const fontUrls = [
    "fonts.googleapis.com",
    "fonts.gstatic.com",
    "cdn.jsdelivr.net"
];

app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'unsafe-inline'", "'self'", ...srcUrls],
            styleSrc: ["'unsafe-inline'", "'self'", ...stylesUrls],
            imgSrc: ["blob:", "data:", "'self'", "cdn.jsdelivr.net"],
            fontSrc: ["'self'", ...fontUrls],
            upgradeInsecureRequests: []
        }
    }));

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

app.get('/english', (req, res) => {
    res.render('english')
})


app.post('/english', (req, res) => {
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

app.get('/german', (req, res) => {
    res.render('german')
})


app.post('/german', (req, res) => {
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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('serving on port 3000')
})