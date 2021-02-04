require('dotenv').config()
const express = require('express')
const axios = require('axios')

// const twitter = require('twitter-v2')

const CONSUMER_KEY = process.env.TWITTER_OAUTH_CONSUMER_KEY
const CONSUMER_SECRET = process.env.TWITTER_OAUTH_CONSUMER_SECRET
const TOKEN_KEY = process.env.TWITTER_OAUTH_TOKEN_KEY
const TOKEN_SECRET = process.env.TWITTER_OAUTH_TOKEN_SECRET

const router = express.Router()

// const client = new twitter({
//     consumer_key: CONSUMER_KEY,
//     consumer_secret: CONSUMER_SECRET,
//     access_token_key: TOKEN_KEY,
//     access_token_secret: TOKEN_SECRET
// })

const twitterUrl = 'https://api.twitter.com/2/users/15182079/tweets'
// const twitterUrl = '/users/15182079/tweets'
// const twitterHeaders = { 
//     'Authorization': 'OAuth oauth_consumer_key="' + CONSUMER_KEY + '",oauth_token="' + TOKEN + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1612399605",oauth_nonce="vwqDpKzb1OI",oauth_version="1.0",oauth_signature="W94Un693iVA%2FV4KVTpubukHwlW0%3D"',
//     'Cookie': 'personalization_id="v1_ZTziNz8G674lqjpwGOyjsQ=="; guest_id=v1%3A161239937142054139'
// }

router.get('/', async (req, res) => {
    // console.log(`TWITTERURL: ${twitterUrl}`)
    // console.log(`TWITTERHEADERS: ${twitterHeaders}`)
    // console.log(`TWITTERHEADERS KEYS: ${Object.keys(twitterHeaders)}`)
    // console.log(`TWITTERHEADERS.AUTHORIZATION: ${twitterHeaders.Authorization}`)
    try {
        const result = await axios.get(twitterUrl, {
            headers: { 'Authorization': 'OAuth oauth_consumer_key="' + CONSUMER_KEY + '",oauth_token="' + TOKEN_KEY + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1612399605",oauth_nonce="vwqDpKzb1OI",oauth_version="1.0",oauth_signature="W94Un693iVA%2FV4KVTpubukHwlW0%3D"' } 
        })
        console.log(`RESULT: ${result}`)
        console.log(`RESULT KEYS: ${Object.keys(result)}`)
        console.log(`RESULT.DATA: ${result.data}`)
        console.log(`RESULT.DATA KEYS: ${Object.keys(result.data)}`)
        res.status(200).json({tweets: result.data})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router