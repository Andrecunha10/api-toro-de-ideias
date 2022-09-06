const joi = require('joi')

const validateBody = (req, res, next) => {
    const body = req.body

    const bodySchema = joi.object({
        message: joi.string().min(10).max(255).required(),
        name: joi.string().min(3).max(13).required(),
        departament: joi.string().max(3).required(),
        userId: joi.number().required()
    })

    const bodyResult = bodySchema.validate(body)

    if (bodyResult.error){
        const detailsMessage = bodyResult.error.details.map(item => {
            return item.message
        })
        return res.status(400).json({
            message: detailsMessage.join(';')
        })
    }

    return next()
}

module.exports = validateBody