const domainToDTO = (exhibitProblems) => {
    return {
        id: exhibitProblems.id,
        name: exhibitProblems.name,
        description: exhibitProblems.description,
        shortDescription: exhibitProblems.shortDescription,
        departament: exhibitProblems.departament,
        status: exhibitProblems.status,
        suggestions: [
            ...exhibitProblems.suggestions.map(item => {
                return {
                    message: item.message,
                    name: item.name,
                    departament: item.departament,
                    userId: item.userId,
                    id: item.id,
                    problemId: item.problemId,
                    createdAt: item.createdAt,
                    deletedAt: item.deletedAt,
                    status: item.status                    
                }
            })
        ]
    }
}

module.exports = {
    domainToDTO,
}



// const DTOToDomain = ({}) => {

// }

