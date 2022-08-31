module.exports = class SuggestionsEntity {
  constructor (
    id,
    message,
    name,
    departament,
    problemId,
    userId,
    createdAt,
    deletedAt,
    status
  ){
    this.id = id
    this.message = message,
    this.name = name,
    this.departament = departament,
    this.problemId = problemId,
    this.userId = userId
    this.createdAt = createdAt,
    this.deletedAt = deletedAt,
    this.status = status
  }

  static build(
    id,
    message,
    name,
    departament,
    problemId,
    userId,
    createdAt,
    deletedAt,
) {


    let status = 'active';
    if (deletedAt && deletedAt !== ' ' && deletedAt !== '') {
        status = 'deleted';
    }

    return new SuggestionsEntity(
        id,
        message,
        name,
        departament,
        problemId,
        userId,
        createdAt,
        deletedAt,
        status
    )

}


}