const domainToDTO = (listProblems) => {
    return {
        total: listProblems.length,
        problems: [
            ... listProblems.map( item => {
                return {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    shortDescription: item.shortDescription,
                    departament: item.departament,
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


// module.exports = {
//     DTOToDomain,
//     domainToDTO
// }
