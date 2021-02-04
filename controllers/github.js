require('dotenv').config()
const express = require('express')
const axios = require('axios')

const router = express.Router()

const githubUrl = 'https://api.github.com/users/jtreeves/events'

router.get('/', async (req, res) => {
    try {
        const result = await axios.get(githubUrl)
        res.status(200).json({tweets: result.data})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router