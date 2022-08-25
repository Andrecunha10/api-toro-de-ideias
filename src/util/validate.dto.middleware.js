//THIS PAGE IS FOR STUDY

// const createDetails = (error) => {
//     return error.details.reduce((acc, item) => {
//         console.log('acc errorDetails', acc)
//         console.log('item errorDetails', item)

//         return [
//             ...acc, item.message
//         ];
//     }, [])
// }

// exports.validateDto = (context, schema) => {
//     return (req, res, next) => {
//         try {
//             const {value, error } = schema.validate(req[context], {
//                 allowUnknown: false,
//             })

//             req[context] = value

//             return error ? res.status(400).send({
//                 message: createDetails(error).join(';')
//             }) : next()
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }