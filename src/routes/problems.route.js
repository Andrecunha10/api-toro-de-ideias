const { listProblems, exhibitProblems} = require('../controllers/problems.controller')

const problems = (app) => {
    app.get('/problems', listProblems)
    app.get('/problems/:id', exhibitProblems)
}

module.exports = problems