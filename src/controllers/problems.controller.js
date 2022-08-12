const listProblemsUseCase = require('../core/problems/listProblems.UseCase')

const queryList = ['id']

const listProblems = (req, res) => {
    const query = req.query

    if(!queryList.includes(Object.keys(query).toString()) && Object.keys(query).length !== 0){
        return res.status(400).json({
            mensagem: "Request Not Found",
        })
    }

    const problems = listProblemsUseCase(query.id)

    if (Object.keys(problems).length === 0) {
        return res.status(400).json({
        mensagem: "Problem Not Found",
        })
    } 
    
    res.send(problems)
    
}

module.exports = listProblems


