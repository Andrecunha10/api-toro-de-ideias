const { listProblems, exhibitProblems} = require('../controllers/problemsController')
const { includeSuggestion } = require('../controllers/suggestionController')
const validadeId = require('../schema/validateId')
const validateBody = require('../schema/validateBody')
const validateQuery = require('../schema/validateQuery')

const problemsRoutes = (app) => {
    app.get('/problems', validateQuery, listProblems)
    app.get('/problems/:id', validadeId, exhibitProblems)
    app.post(
        '/problems/:id/suggestion', 
        validadeId, 
        validateBody, 
        includeSuggestion
    )
}

module.exports = problemsRoutes