const {includeSuggestionData} = require('../../infra/data/repositories/suggestionsRepo')
const problemsRepo = require('../../infra/data/repositories/problemsRepo')
const { BusinessError } = require('../error/errorEntity')

const includeSuggestionUseCase = (suggestion) => {

    const problem = problemsRepo.findById(suggestion.problemId)
    if (!problem)        
        throw new BusinessError('Problem not found.');
                
        const newSuggestion = includeSuggestionData(suggestion)

        return newSuggestion
}

module.exports = includeSuggestionUseCase
