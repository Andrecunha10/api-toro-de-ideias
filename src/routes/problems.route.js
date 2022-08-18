const { listProblems, exhibitProblems} = require('../controllers/problemsController')

const problems = (app) => {
    app.get('/problems', listProblems)
    app.get('/problems/:id', exhibitProblems)
    app.post('/problems/:id/suggestion', )
}

module.exports = problems