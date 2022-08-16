const data = [
    {
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est.",
      "name": "André Cunha",
      "departament": "Dev",
      "problemId": 1,
      "id": 1
    },
    {
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est.",
      "name": "Chico",
      "departament": "Mkt",
      "problemId": 1,
      "userId": 1,
      "id": 2
    },
    {
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est.",
      "name": "André Cunha",
      "departament": "Dev",
      "problemId": 1,
      "userId": 2,
      "id": 3
    },
    {
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est.",
      "name": "Chico",
      "departament": "Mkt",
      "problemId": 1,
      "userId": 1,
      "id": 4
    },
    {
      "message": "Eu vou mudar tudo que não me convém. Hoje eu tenho tudo que eu poderia querer, mas dinheiro não é tudo eu tenho muito a fazer.",
      "name": "André Cunha",
      "departament": "Dev",
      "problemId": 3,
      "userId": 2,
      "id": 7
    },
    {
      "message": "Eu prefiro ser, esta metamorfose ambulante.",
      "name": "André Cunha",
      "departament": "Dev",
      "problemId": 1,
      "userId": 2,
      "id": 8
    },
    {
      "message": "Brindo a casa, brindo a vida, meus valores, minha família.",
      "name": "Jéssica",
      "departament": "RH",
      "problemId": 2,
      "userId": 3,
      "id": 9
    }]
  

  const listSuggestionsUseCase = (id) => {
    
    if (id) {
      const dataId = data.filter(item => item.id == id)
      return dataId
    } else {
      return data
    }
  }

  module.exports = listSuggestionsUseCase