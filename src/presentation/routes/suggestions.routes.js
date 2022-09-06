const validadeId = require('../schema/validateId')
const { deleteSuggestion } = require('../controllers/suggestionController')
const suggestonsRoutes = (app) =>{
    app.delete('/suggestions/:id', validadeId, deleteSuggestion)
}

module.exports = suggestonsRoutes