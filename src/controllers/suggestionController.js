const includeSuggestionMaper = require('../mapper/suggestions/includeSuggestionMapper')

const includeSuggestion = (req, res) => {
    const {params, body} = req

    const suggestion = {
        message: body.message,
        name: body.name,
        departament: body.departament,
        problemId: params.id
    }
    res.json(includeSuggestionMaper.domaintoDto(suggestion))
}

const deleteSuggestion = (req, res) => {

}

module.exports = {
    includeSuggestion,
    deleteSuggestion
}