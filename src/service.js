const express = require('express') // IMPORT EXPRESS
const app = express()
const problemsRoutes = require('./presentation/routes/problems.routes')
const suggestonsRoutes = require('./presentation/routes/suggestions.routes')
const notFound = require('./presentation/routes/notFound.routes')

app.use(express.json())

problemsRoutes(app)
suggestonsRoutes(app)
notFound(app)

module.exports = app