const listProblemsUseCase = require('../core/problems/listProblems.UseCase')
const listProblemsMapper = require('../mapper/problems/listProblems.mapper')

const status = ['open', 'close']

const listProblems = (req, res) => {
    const query = req.query

    if(!status.includes(query.status) && Object.keys(query).length !== 0){
        return res.status(400).json({
            mensagem: "Request Not Found",
        })
    }

    const problems = listProblemsUseCase(query.status)


    if (Object.keys(problems).length === 0) {
        return res.status(400).json({
        mensagem: "Problem Not Found",
        })
    } 
    
    res.send(listProblemsMapper.domainToDTO(problems))
    
}

module.exports = listProblems


