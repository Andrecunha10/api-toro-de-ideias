const {findById, upDateSuggestionData} = require('../../infra/data/repositories/suggestionsRepo')
const {BusinessError} = require('../error/errorEntity')
const newDate = require('../../util/newDate')


const deleteSuggestionUseCase = (suggestionId) =>{

    const suggestion = findById(suggestionId)

    if(!suggestion){
       throw new BusinessError('Suggestion not found.')
       
    }
    if(suggestion.deletedAt) {
        throw new BusinessError('Suggestion already deleted.')
    }

    suggestion.deletedAt = newDate()

    upDateSuggestionData(suggestion)
    
    return

}

module.exports = deleteSuggestionUseCase