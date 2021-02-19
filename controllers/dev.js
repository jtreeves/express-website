require('dotenv').config()
const express = require('express')
const axios = require('axios')

const router = express.Router()

const devUrl = 'https://dev.to/api/articles?username=jtreeves'

router.get('/', async (req, res) => {
    try {
        const result = await axios.get(devUrl)
        res.status(200).json({posts: result.data})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router