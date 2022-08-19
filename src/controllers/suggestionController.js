const includeSuggestionMaper = require('../mapper/suggestions/includeSuggestionMapper')
const { includeSuggestionData } = require('../infra/data/repositories/suggestionsRepo')

const includeSuggestion = (req, res) => {
    const {params, body} = req

    const suggestion = includeSuggestionData(body, params.id)

    console.log(includeSuggestionMaper.domaintoDto(suggestion))

    res.json(includeSuggestionMaper.domaintoDto(suggestion))
}

const deleteSuggestion = (req, res) => {

}

module.exports = {
    includeSuggestion,
    deleteSuggestion
}