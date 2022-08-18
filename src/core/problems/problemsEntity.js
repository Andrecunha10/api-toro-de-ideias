module.exports =  class ProblemsEntity {
    constructor(
        id,
        name,
        description,
        shortDescription,
        departament,
        status,
        suggestions
    ) {
        this.id = id,
        this.name = name,
        this.description = description,
        this.shortDescription = shortDescription,
        this.departament = departament,
        this.status = status
        this.suggestions = suggestions
    }

    static build (
        id,
        name,
        description,
        shortDescription,
        departament,
        status,
        suggestions
    ) {
        if(!suggestions) {
            this.suggestions = []
        }
        return new ProblemsEntity(
            id,
            name,
            description,
            shortDescription,
            departament,
            status,
            suggestions
        )
    }
} 
