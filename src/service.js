const express = require('express') // IMPORT EXPRESS
const app = express()
const problemsRoutes = require('./routes/problems.routes')
const suggestonsRoutes = require('./routes/suggestions.routes')
const notFound = require('./routes/notFound.routes')

app.use(express.json())

problemsRoutes(app)
suggestonsRoutes(app)
notFound(app)

module.exports = app