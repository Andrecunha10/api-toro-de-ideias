const domain = (body, problemId) => {
    return {
        message: body.message,
        name: body.name,
        departament: body.departament,
        problemId,
        userId: body.userId
    }
}

const domaintoDto = (suggestion) => {

    return {
        message: 'Suggestion successfully registered.',
        suggestion: {
            id: suggestion.id,
            message: suggestion.message,
            name: suggestion.name,
            departament: suggestion.departament,
            problemId: suggestion.problemId,
            userId: suggestion.userId,
            inclusionDate: suggestion.inclusionDate,
            deleteDate: suggestion.deleteDate,
            status: suggestion.status
        }
    }
}

module.exports = {
    domaintoDto,
    domain
}