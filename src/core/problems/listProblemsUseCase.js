const problemsRepo = require('../../infra/data/repositories/problemsRepo')
const {BusinessError} = require('../error/errorEntity')

  const listProblemsUseCase = (status) => {
    
      const result = problemsRepo.search(status)

      if (!result) {
        throw new BusinessError('Problems not found.')
      }
      return result
  }

  module.exports = listProblemsUseCase