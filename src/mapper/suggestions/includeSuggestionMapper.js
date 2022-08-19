const domaintoDto = (suggestion) => {

    //Criar lógica de gerar Id
    //Pegar ID do usuário quando gerar Autenticação.
    return {
        message: 'success',
        suggestion: {
            id: 3,
            message: suggestion.message,
            name: suggestion.name,
            departament: suggestion.departament,
            problemId: suggestion.problemId,
            userId: 1
        }
    }
}

module.exports = {
    domaintoDto
}