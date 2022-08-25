const express = require('express') // IMPORT EXPRESS
const app = express()
const problemsRoutes = require('./routes/problems.route')

app.use(express.json())

problemsRoutes(app)

module.exports = app