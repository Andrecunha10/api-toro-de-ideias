const includeSuggestionMaper = require('../mapper/suggestions/includeSuggestionMapper')
const deleteSuggestionMapper = require('../mapper/suggestions/deleteSuggestionMapper')
const includeSuggestionUseCase = require('../core/suggestions/includeSuggestionUseCase')
const deleteSuggestionUseCase = require('../core/suggestions/deleteSuggestionUseCase')

const includeSuggestion = (req, res) => {

    try {

        const {params, body} = req

        const suggestion = includeSuggestionMaper.domain(body, params.id)

        const newSuggestion = includeSuggestionUseCase(suggestion)

        res.json(includeSuggestionMaper.domaintoDto(newSuggestion))

    } catch (error) {

        return res.status(error.statusCode || 500).json({
            mensagem: error.statusCode ? error.message : "Internal Server Error"
        })
    }
    
}

const deleteSuggestion = (req, res) => {

    try {

        const {params} = req

        deleteSuggestionUseCase(params.id)

        res.json(deleteSuggestionMapper.domainToDTO())

    } catch (error) {

        return res.status(error.statusCode || 500).json({
            mensagem: error.statusCode ? error.message : "Internal Server Error"
        })

    }
    
}

module.exports = {
    includeSuggestion,
    deleteSuggestion
}