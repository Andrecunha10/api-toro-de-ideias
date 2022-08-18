module.exports = class SuggestionsEntity {
  constructor (
    id,
    message,
    name,
    departament,
    problemId,
    userId,
  ){
    this.id = id
    this.message = message,
    this.name = name,
    this.departament = departament,
    this.problemId = problemId,
    this.userId = userId
  }
}