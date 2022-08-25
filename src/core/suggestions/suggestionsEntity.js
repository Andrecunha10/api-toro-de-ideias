module.exports = class SuggestionsEntity {
  constructor (
    id,
    message,
    name,
    departament,
    problemId,
    userId,
    inclusionDate,
    deleteDate,
    status
  ){
    this.id = id
    this.message = message,
    this.name = name,
    this.departament = departament,
    this.problemId = problemId,
    this.userId = userId
    this.inclusionDate = inclusionDate,
    this.deleteDate = deleteDate,
    this.status = status
  }

  static build(
    id,
    message,
    name,
    departament,
    problemId,
    userId,
    inclusionDate,
    deleteDate,
) {


    let status = 'active';
    if (deleteDate && deleteDate !== ' ' && deleteDate !== '') {
        status = 'deleted';
    }

    return new SuggestionsEntity(
        id,
        message,
        name,
        departament,
        problemId,
        userId,
        inclusionDate,
        deleteDate,
        status
    )

}


}