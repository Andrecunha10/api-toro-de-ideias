const problemsRepo = require('../../infra/data/repositories/problemsRepo')
const suggestionsRepo = require('../../infra/data/repositories/suggestionsRepo')

  const exhibitProblemsUseCase = (id) => {

    const problem = problemsRepo.findById(id)
    
    if (!problem) {
      console.log('problem dont found')
      return undefined
    }
    const listSuggestionByProblemId = suggestionsRepo.search(id)

    problem.suggestions = listSuggestionByProblemId
    
    return problem
  }

  module.exports = exhibitProblemsUseCase