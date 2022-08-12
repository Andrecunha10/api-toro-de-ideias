const listProblems = require('../controllers/problems.controller')

const problems = (app) => {
    app.get('/problems', listProblems)
}

module.exports = problems