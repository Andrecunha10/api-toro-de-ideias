const newDate = () => {
    const date = new Date()

    return [
        date.getDate().toString().padStart(2, '0'),
        (date.getMonth() + 1).toString().padStart(2, '0'),
        date.getFullYear(),
    ].join('-')
}

module.exports = newDate