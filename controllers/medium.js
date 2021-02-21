require('dotenv').config()
const express = require('express')
const Parser = require('rss-parser')
let parser = new Parser({
    customFields: {
        item: [
            ['content:encoded', 'content'],
        ]
    }
})

const router = express.Router()

const mediumUrl = 'https://medium.com/feed/@jtreeves'

router.get('/', async (req, res) => {
    try {
        const result = await parser.parseURL(mediumUrl)
        res.status(200).json({posts: result})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router