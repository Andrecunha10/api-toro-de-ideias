const problemsRepo = require('../../infra/data/repositories/problemsRepo')
const suggestionsRepo = require('../../infra/data/repositories/suggestionsRepo')
const {BusinessError} = require('../error/errorEntity')

  const exhibitProblemsUseCase = (id) => {

    
    const problem = problemsRepo.findById(id)
    
    if (!problem) {
      throw new BusinessError('Problem not found.')
    }
    const listSuggestionByProblemId = suggestionsRepo.search(id)

    problem.suggestions = listSuggestionByProblemId
    
    return problem
  }

  module.exports = exhibitProblemsUseCase