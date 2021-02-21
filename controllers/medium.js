require('dotenv').config()
const express = require('express')
const axios = require('axios')

const router = express.Router()

const mediumUrl = 'https://medium.com/feed/@jtreeves'

router.get('/', async (req, res) => {
    try {
        const result = await axios.get(mediumUrl)
        res.status(200).json({posts: JSON.stringify(result)})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router