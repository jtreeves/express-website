require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')

const router = express.Router()

const username = process.env.GMAIL_USERNAME
const password = process.env.GMAIL_PASSWORD

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: username,
        pass: password
    }
})

router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body
    try {
        await transporter.sendMail({
            to: 'jr@jacksonreeves.com',
            subject: subject,
            html: `
                <p><strong>Name:</strong> ${name}</p> 
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p> 
                <p><strong>Message:</strong> ${message}</p>
            `
        })
        res.status(200).json({msg: 'Your message was sent!'})
    } catch (error) {
        res.status(400).json({msg: 'Error sending message.'})
    }
})

module.exports = router