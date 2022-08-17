const data = [{
    "name": "Hora Extra",
    "shortDescription": "Elevado custo com horas extras",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est. Pellentesque a iaculis est. Suspendisse potenti. Integer sed nisl laoreet, rhoncus ex eu, auctor tellus. Fusce nunc nibh, tempus id hendrerit eu, vestibulum in libero.",
    "departament": "Recursos Humanos",
    "status": "open",
    "id": 1
  },
  {
    "name": "Reclamação Clientes",
    "shortDescription": "Aumento do número de reclamações de clientes",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est. Pellentesque a iaculis est. Suspendisse potenti. Integer sed nisl laoreet, rhoncus ex eu, auctor tellus. Fusce nunc nibh, tempus id hendrerit eu, vestibulum in libero.",
    "departament": "Custumer Service",
    "status": "open",
    "id": 2
  },
  {
    "name": "Atrasos na Chegada",
    "shortDescription": "Funcinários chegam atrasados no posto de trabalho",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est. Pellentesque a iaculis est. Suspendisse potenti. Integer sed nisl laoreet, rhoncus ex eu, auctor tellus. Fusce nunc nibh, tempus id hendrerit eu, vestibulum in libero.",
    "departament": "Recursos Humanos",
    "status": "open",
    "id": 3
  },
  {
    "name": "Produto X",
    "shortDescription": "O que podemos melhorar no Produto X?",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est. Pellentesque a iaculis est. Suspendisse potenti. Integer sed nisl laoreet, rhoncus ex eu, auctor tellus. Fusce nunc nibh, tempus id hendrerit eu, vestibulum in libero.",
    "departament": "Marketing",
    "status": "close",
    "id": 4
  }]


const search = (status) => {
    if (status) {
        const resultSearch = data.filter(item => item.status == status)
        return resultSearch
    }
    return data
}

const findById = (id) => {
   return data.find(item => item.id == id)
}
module.exports = {
    search,
    findById
}
  
// const search = ({ status }) => {

//     let resultFromDB = data;

//     if (status) {
//         resultFromDB =  data.filter(item => item.status == status)                    
//     }
    
//     //todo: extrair logica de conversao de dataObejct para Entity     
//     return resultFromDB.map(item => {

//         const { 
//             id,
//             descricao,
//             status 
//         } = item;

//         return CursoEntity.build(
//             id,
//             descricao,
//             status
//         )
//     });

// }

// const findById = (id) => {

//     return data.find(item => {
//         return item.id == id
//     })

// }

// module.exports = {

//     search,
//     findById

// }