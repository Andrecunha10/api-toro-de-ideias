const express = require('express') // IMPORT EXPRESS
const app = express()
const problemsRoutes = require('./routes/problems.routes')
const suggestonsRoutes = require('./routes/suggestions.routes')

app.use(express.json())

problemsRoutes(app)
suggestonsRoutes(app)

module.exports = app