const joi = require('joi')

const status = ['open', 'closed']

const validateQuery = (req, res, next) => {
    const query = req.query

    if(!status.includes(query.status) && Object.keys(query).length !== 0){
        return res.status(400).json({
            mensagem: "Status must be iqual 'open' or 'closed'",
        })
    }

    return next()
}

module.exports = validateQuery