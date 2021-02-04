require('dotenv').config()
const express = require('express')
const axios = require('axios')

const router = express.Router()

const key = process.env.TUMBLR_API_KEY

const tumblrUrl = 'https://api.tumblr.com/v2/blog/programming10101.tumblr.com/posts/text?tag=thoughts&api_key='

router.get('/', async (req, res) => {
    try {
        const result = await axios.get(tumblrUrl + key)
        console.log(`RESULT: ${result}`)
        console.log(`RESULT KEYS: ${Object.keys(result)}`)
        console.log(`RESULT.DATA: ${result.data}`)
        console.log(`RESULT.DATA KEYS: ${Object.keys(result.data)}`)
        console.log(`RESULT.DATA.RESPONSE: ${result.data.response}`)
        console.log(`RESULT.DATA.RESPONSE KEYS: ${Object.keys(result.data.response)}`)
        console.log(`RESULT.DATA.RESPONSE.POSTS: ${result.data.response.posts}`)
        console.log(`RESULT.DATA.RESPONSE.POSTS KEYS: ${Object.keys(result.data.response.posts)}`)
        res.status(200).json({posts: result.data.response.posts})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router