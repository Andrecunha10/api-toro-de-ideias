const {includeSuggestionData} = require('../../infra/data/repositories/suggestionsRepo')
const { findById } = require('../../infra/data/repositories/problemsRepo')
const { BusinessError } = require('../error/errorEntity')

const includeSuggestionUseCase = (suggestion) => {

    const problem = findById(suggestion.problemId)
    if (!problem)        
        throw new BusinessError('Problem not found.')

    if(problem.status === "closed"){
        throw new BusinessError('Cannot suggest in a closed problem')
    }
                
    const newSuggestion = includeSuggestionData(suggestion)

    return newSuggestion
}

module.exports = includeSuggestionUseCase
