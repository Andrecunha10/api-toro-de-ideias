const express = require('express') // IMPORT EXPRESS
const app = express()

const problems = require('./routes/problems.route')

app.use(express.json())

problems(app)

module.exports = app