require('dotenv').config()
const express = require('express')
const axios = require('axios')

const router = express.Router()

const bearer = process.env.TWITTER_OAUTH_BEARER

const twitterUrl = 'https://api.twitter.com/2/users/15182079/tweets?tweet.fields=id,text,created_at'
const twitterHeaders = {
    'Authorization': `Bearer ${bearer}`
}

router.get('/', async (req, res) => {
    try {
        const result = await axios.get(twitterUrl, {
            headers: twitterHeaders 
        })
        res.status(200).json({tweets: result.data.data})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router