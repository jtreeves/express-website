require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const twitter = require('./controllers/twitter')
const tumblr = require('./controllers/tumblr')
const github = require('./controllers/github')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/twitter', twitter)
app.use('/tumblr', tumblr)
app.use('/github', github)

app.get('/', (req, res) => {
    res.status(200).json({msg: 'Viewing my backend'})
})

const PORT = process.env.PORT || 8000

const server = app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

module.exports = server