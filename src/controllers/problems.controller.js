const listProblemsUseCase = require('../core/problems/listProblems.UseCase')
const exhibitProblemsUseCase = require('../core/problems/exhibitProblems.UseCase')
const listProblemsMapper = require('../mapper/problems/listProblems.mapper')
const exhibitProblemsMapper = require('../mapper/problems/exhibitProblems.mapper')

const status = ['open', 'closed']

const listProblems = (req, res) => {
    const query = req.query

    if(!status.includes(query.status) && Object.keys(query).length !== 0){
        return res.status(400).json({
            mensagem: "Request Not Found",
        })
    }

    const ucResult = listProblemsUseCase(query.status)


    if (Object.keys(ucResult).length === 0) {
        return res.status(400).json({
        mensagem: "Problem Not Found",
        })
    } 
    
    res.send(listProblemsMapper.domainToDTO(ucResult))
    
}

const exhibitProblems = (req, res) => {
    const params = req.params

    if(!params.id || params.id.includes(' ')){
        return res.status(400).json({
            mensagem: "Problem ID not informed",
        }) 
    }
    const ucResult = exhibitProblemsUseCase(params.id)

    res.send(exhibitProblemsMapper.domainToDTO(ucResult))
}

module.exports = {
    listProblems,
    exhibitProblems
}


