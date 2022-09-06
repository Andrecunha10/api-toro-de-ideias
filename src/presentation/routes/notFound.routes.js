const notFound = (app) => {
    app.use((req, res) => {
        res.status(404).json({
            message: 'Request not found!'
        })
    })
}

module.exports = notFound