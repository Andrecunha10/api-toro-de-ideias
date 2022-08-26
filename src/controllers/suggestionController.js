const includeSuggestionMaper = require('../mapper/suggestions/includeSuggestionMapper')
const includeSuggestionUseCase = require('../core/suggestions/includeSuggestionUseCase')
const deleteSuggestionUseCase = require('../core/suggestions/deleteSuggestionUseCase')

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

    try {
        const {params} = req
        console.log('suggestionsControlers', params)

        deleteSuggestionUseCase(params.id)

        res.json({
            message: 'deu bom'
        })
    } catch (error) {
        // console.log('errorControler', error.statusCode)
        return res.status(error.statusCode || 500).json({
            mensagem: error.statusCode ? error.message : "Internal Server Error"
        }); 
    }
    
}

module.exports = {
    includeSuggestion,
    deleteSuggestion
}