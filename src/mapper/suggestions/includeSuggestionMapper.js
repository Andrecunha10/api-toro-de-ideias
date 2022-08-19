const domaintoDto = (suggestion) => {

    return {
        message: 'success',
        suggestion: {
            id: suggestion.id,
            message: suggestion.message,
            name: suggestion.name,
            departament: suggestion.departament,
            problemId: suggestion.problemId,
            userId: suggestion.userId
        }
    }
}

module.exports = {
    domaintoDto
}