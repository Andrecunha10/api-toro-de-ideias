const listProblemsUseCase = require('../core/problems/listProblemsUseCase')
const exhibitProblemsUseCase = require('../core/problems/exhibitProblemsUseCase')
const listProblemsMapper = require('../mapper/problems/listProblems.mapper')
const exhibitProblemsMapper = require('../mapper/problems/exhibitProblems.mapper')

const status = ['open', 'closed']

const listProblems = (req, res) => {

    try {

        const query = req.query

        const ucResult = listProblemsUseCase(query.status)
        
        res.send(listProblemsMapper.domainToDTO(ucResult))
        
    } catch (error) {

        return res.status(error.statusCode || 500).json({
            mensagem: error.statusCode ? error.message : "Internal Server Error"
        })

    }
    
    
}

const exhibitProblems = (req, res) => {

    try {
        const params = req.params
    
        const ucResult = exhibitProblemsUseCase(params.id)

        res.send(exhibitProblemsMapper.domainToDTO(ucResult))
    } catch (error) {

        return res.status(error.statusCode || 500).json({
            mensagem: error.statusCode ? error.message : "Internal Server Error"
        })

    }
    
}

module.exports = {
    listProblems,
    exhibitProblems
}


