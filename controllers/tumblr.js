require('dotenv').config()
const express = require('express')
const axios = require('axios')

const router = express.Router()

const key = process.env.TUMBLR_API_KEY

const tumblrUrl = 'https://api.tumblr.com/v2/blog/jacksonreeves.tumblr.com/posts/'

router.get('/:type/:tag', async (req, res) => {
    const type = req.params.type
    const tag = req.params.tag
    try {
        const result = await axios.get(
            tumblrUrl + type + '?tag=' + tag + '&api_key=' + key
        )
        res.status(200).json({posts: result.data.response.posts})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router