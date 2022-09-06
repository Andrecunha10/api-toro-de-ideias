const joi = require('joi')

const validateId = (req, res, next) => {
    const params = req.params
    
    const idSchema = joi.object({
        id: joi.number().required(),
    })

    const idResult = idSchema.validate(params)
    
    if (idResult.error){
        const detailsMessage = idResult.error.details.map(item => {
            return item.message
        })
        return res.status(400).json({
            message: detailsMessage.join(';')
        })
    }

    return next()
}

module.exports = validateId