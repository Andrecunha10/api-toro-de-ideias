const problemsRepo = require('../../infra/data/repositories/problemsRepo')

  const listProblemsUseCase = (status) => {
    
      return problemsRepo.search(status)

  }

  module.exports = listProblemsUseCase