const service = require('./src/service')

const PORT = process.env.PORT || 3003

const listener = service.listen(PORT, () => {
  console.log("Node.js listening on port " + listener.address().port)
})