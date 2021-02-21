require('dotenv').config()
const express = require('express')
const axios = require('axios')
const Parser = require('rss-parser')
const parser = new Parser()

const router = express.Router()

const mediumUrl = 'https://medium.com/feed/@jtreeves'

router.get('/', async (req, res) => {
    try {
        const result = await parser.parseURL(mediumUrl)
        // const result = await axios.get(mediumUrl)
        console.log(`RESULT: ${result}`)
        console.log(`RESULT KEYS: ${Object.keys(result)}`)
        console.log(`RESULT.ITEMS: ${result.items}`)
        console.log(`RESULT.ITEMS KEYS: ${Object.keys(result.items)}`)
        // const resultJSON = parser.parseString(result)
        // console.log(`RESULTJSON: ${resultJSON}`)
        // console.log(`RESULTJSON KEYS: ${Object.keys(resultJSON)}`)
        // console.log(`RESULT JSON: ${JSON.stringify(result)}`)
        res.status(200).json({posts: result})
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

module.exports = router