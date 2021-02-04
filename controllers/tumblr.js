require('dotenv').config()
const express = require('express')
const axios = require('axios')

const router = express.Router()

const key = process.env.TUMBLR_API_KEY

const tumblrUrl = 'https://api.tumblr.com/v2/blog/programming10101.tumblr.com/posts/text?tag=thoughts&api_key='

router.get('/', async (req, res) => {
    try {
        const result = await axios.get(tumblrUrl + key)
        res.status(200).json({posts: result.data.response.posts})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router