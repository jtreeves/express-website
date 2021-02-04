require('dotenv').config()
const express = require('express')

const router = express.Router()

const CONSUMER_KEY = process.env.TWITTER_OAUTH_CONSUMER_KEY
const TOKEN = process.env.TWITTER_OAUTH_TOKEN
const twitterUrl = 'https://api.twitter.com/2/users/15182079/tweets'
const twitterHeaders = { 
    'Authorization': 'OAuth oauth_consumer_key="' + CONSUMER_KEY + '",oauth_token="' + TOKEN + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1612399605",oauth_nonce="vwqDpKzb1OI",oauth_version="1.0",oauth_signature="W94Un693iVA%2FV4KVTpubukHwlW0%3D"',
    'Cookie': 'personalization_id="v1_ZTziNz8G674lqjpwGOyjsQ=="; guest_id=v1%3A161239937142054139'
}

router.get('/', async (req, res) => {
    console.log(`TWITTERURL: ${twitterUrl}`)
    console.log(`TWITTERHEADERS: ${twitterHeaders}`)
    console.log(`TWITTERHEADERS KEYS: ${Object.keys(twitterHeaders)}`)
    console.log(`TWITTERHEADERS.AUTHORIZATION: ${twitterHeaders.Authorization}`)
    try {
        const result = await axios.get(twitterUrl, { twitterHeaders })
        console.log(`RESULT: ${result}`)
        console.log(`RESULT.DATA: ${result.data}`)
        res.status(200).json({tweets: result.data})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router