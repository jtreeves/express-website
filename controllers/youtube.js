require('dotenv').config()
const express = require('express')
const axios = require('axios')

const router = express.Router()

const key = process.env.YOUTUBE_API_KEY

const youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?type=video&order=date&channelId=UCVaB8BfT4s6G5NRVx4nobtg&key=' + key

router.get('/', async (req, res) => {
    try {
        const result = await axios.get(youtubeUrl)
        res.status(200).json({videos: result.data})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router