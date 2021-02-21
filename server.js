require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const twitter = require('./controllers/twitter')
const github = require('./controllers/github')
const tumblr = require('./controllers/tumblr')
const dev = require('./controllers/dev')
const medium = require('./controllers/medium')
const youtube = require('./controllers/youtube')
const mail = require('./controllers/mail')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))

app.use('/twitter', twitter)
app.use('/github', github)
app.use('/tumblr', tumblr)
app.use('/dev', dev)
app.use('/medium', medium)
app.use('/youtube', youtube)
app.use('/mail', mail)

app.get('/', (req, res) => {
    res.status(200).json({msg: 'Viewing my backend'})
})

const PORT = process.env.PORT || 8000

const server = app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

module.exports = server