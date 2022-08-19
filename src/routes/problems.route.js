const { listProblems, exhibitProblems} = require('../controllers/problemsController')
const { includeSuggestion } = require('../controllers/suggestionController')
const validadeId = require('../schema/validateId')
const validateBody = require('../schema/validateBody')

const problems = (app) => {
    app.get('/problems', listProblems)
    app.get('/problems/:id', validadeId, exhibitProblems)
    app.post('/problems/:id/suggestion', validadeId, validateBody, includeSuggestion)
}

module.exports = problems