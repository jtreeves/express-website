require('dotenv').config()
const express = require('express')
const axios = require('axios')
const nodemailer = require('nodemailer')
const sendgrid = require('nodemailer-sendgrid-transport')

const router = express.Router()

const key = process.env.SENDGRID_API_KEY

const transporter = nodemailer.createTransport(sendgrid({
    auth: {api_key: key}
}))

router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body
    try {
        const newMail = await transporter.sendMail({
            to: 'jr@jacksonreeves.com',
            from: email,
            subject: subject,
            html: `<h3>${name}</h3><p>${message}</p>`
        })
        res.status(200).json({email: newMail})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router