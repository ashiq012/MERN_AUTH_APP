const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()
require('./config/database').connect()

app.use(express.json())
app.use(cors())

const router = require('./routes/auth')
app.use('/api/v1', router)


module.exports = app
