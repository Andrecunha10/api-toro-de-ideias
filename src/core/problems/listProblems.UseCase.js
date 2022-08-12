const data = [{
    "name": "Hora Extra",
    "shortDescription": "Elevado custo com horas extras",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est. Pellentesque a iaculis est. Suspendisse potenti. Integer sed nisl laoreet, rhoncus ex eu, auctor tellus. Fusce nunc nibh, tempus id hendrerit eu, vestibulum in libero.",
    "departament": "Recursos Humanos",
    "id": 1
  },
  {
    "name": "Reclamação Clientes",
    "shortDescription": "Aumento do número de reclamações de clientes",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est. Pellentesque a iaculis est. Suspendisse potenti. Integer sed nisl laoreet, rhoncus ex eu, auctor tellus. Fusce nunc nibh, tempus id hendrerit eu, vestibulum in libero.",
    "departament": "Custumer Service",
    "id": 2
  },
  {
    "name": "Atrasos na Chegada",
    "shortDescription": "Funcinários chegam atrasados no posto de trabalho",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est. Pellentesque a iaculis est. Suspendisse potenti. Integer sed nisl laoreet, rhoncus ex eu, auctor tellus. Fusce nunc nibh, tempus id hendrerit eu, vestibulum in libero.",
    "departament": "Recursos Humanos",
    "id": 3
  },
  {
    "name": "Produto X",
    "shortDescription": "O que podemos melhorar no Produto X?",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est. Pellentesque a iaculis est. Suspendisse potenti. Integer sed nisl laoreet, rhoncus ex eu, auctor tellus. Fusce nunc nibh, tempus id hendrerit eu, vestibulum in libero.",
    "departament": "Marketing",
    "id": 4
  }]

  const listProblemsUseCase = (id) => {
    
    if (id) {
      const dataId = data.filter(item => item.id == id)
      return dataId
    } else {
      return data
    }
  }

  module.exports = listProblemsUseCase