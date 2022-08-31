const SuggestionsEntity = require('../../../core/suggestions/suggestionsEntity')
const newDate = require('../../../util/newDate')

const data = [
    {
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est.",
      "name": "André Cunha",
      "departament": "Dev",
      "problemId": 1,
      "userId": 2,
      "createdAt": '2022-08-01',
      "id": 1
    },
    {
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est.",
      "name": "Chico",
      "departament": "Mkt",
      "problemId": 1,
      "userId": 1,
      "createdAt": '2022-08-01',
      "id": 2
    },
    {
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est.",
      "name": "André Cunha",
      "departament": "Dev",
      "problemId": 1,
      "userId": 2,
      "createdAt": '2022-08-01',
      "id": 3
    },
    {
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est.",
      "name": "Chico",
      "departament": "Mkt",
      "problemId": 1,
      "userId": 1,
      "createdAt": '2022-08-01',
      "id": 4
    },
    {
      "message": "Eu vou mudar tudo que não me convém. Hoje eu tenho tudo que eu poderia querer, mas dinheiro não é tudo eu tenho muito a fazer.",
      "name": "André Cunha",
      "departament": "Dev",
      "problemId": 3,
      "userId": 2,
      "createdAt": '2022-08-01',
      "id": 5
    },
    {
      "message": "Eu prefiro ser, esta metamorfose ambulante.",
      "name": "André Cunha",
      "departament": "Dev",
      "problemId": 1,
      "userId": 2,
      "createdAt": '2022-08-01',
      "id": 6
    },
    {
      "message": "Brindo a casa, brindo a vida, meus valores, minha família.",
      "name": "Jéssica",
      "departament": "RH",
      "problemId": 2,
      "userId": 3,
      "createdAt": '2022-08-01',
      "id": 7
    }
  ]

const search = (problemId) => {
    let resultSearch = data
    if (problemId) {
        resultSearch = data.filter(item => item.problemId == problemId)
    }
    return resultSearch.map(item => {
        const {
            id,
            message,
            name,
            departament,
            problemId,
            userId,
            createdAt,
            deletedAt,
        } = item

        return SuggestionsEntity.build(
          id,
          message,
          name,
          departament,
          problemId,
          userId,
          createdAt,
          deletedAt,
        )
    })
}

const includeSuggestionData = (suggestion) => {
  const newSuggestion = {
    ...suggestion,
    id: data.length + 1,
    createdAt:  newDate()
}
  data.push(newSuggestion)
  return SuggestionsEntity.build(
    newSuggestion.id,
    newSuggestion.message,
    newSuggestion.name,
    newSuggestion.departament,
    newSuggestion.problemId,
    newSuggestion.userId,
    newSuggestion.createdAt
  )
}

const findById = (suggestionId) => {

  return data.find(item => {
    return item.id == suggestionId
})

}

const upDateSuggestionData = (suggestion) =>{

  const changedSuggestion = data.find(item => item.id = suggestion.id)

  changedSuggestion.deletedAt = suggestion.deletedAt
}

module.exports = {
    search,
    includeSuggestionData,
    findById,
    upDateSuggestionData
}


