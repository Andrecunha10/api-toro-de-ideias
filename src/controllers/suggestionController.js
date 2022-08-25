const includeSuggestionMaper = require('../mapper/suggestions/includeSuggestionMapper')
const includeSuggestionUseCase = require('../core/suggestions/includeSuggestionUseCase')

const includeSuggestion = (req, res) => {

    try {

        const {params, body} = req

        const suggestion = includeSuggestionMaper.domain(body, params.id)

        const newSuggestion = includeSuggestionUseCase(suggestion)

        res.json(includeSuggestionMaper.domaintoDto(newSuggestion))

    } catch (error) {
        console.log('errorControler', error.statusCode)
        return res.status(error.statusCode || 500).json({
            mensagem: error.statusCode ? error.message : "Internal Server Error"
        }); 
    }
    
}

const deleteSuggestion = (req, res) => {

}

module.exports = {
    includeSuggestion,
    deleteSuggestion
}