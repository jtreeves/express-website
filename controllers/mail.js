require('dotenv').config()
const express = require('express')
const axios = require('axios')
const nodemailer = require('nodemailer')
const sendgrid = require('nodemailer-sendgrid-transport')

const router = express.Router()

const username = process.env.GMAIL_USERNAME
const password = process.env.GMAIL_PASSWORD

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: username,
        pass: password
    }
})

router.post('/', (req, res) => {
    const { name, email, subject, message } = req.body
    transporter.sendMail({
        to: 'jr@jacksonreeves.com',
        from: email,
        subject: subject,
        html: `<h3>${name}</h3><p>${message}</p>`
    })
})

module.exports = router