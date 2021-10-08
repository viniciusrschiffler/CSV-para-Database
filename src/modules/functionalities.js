function removeRepeatedItems(array) {
    const filteredArray = array.filter((item, i) => {
        return array.indexOf(item) === i
    })

    return filteredArray
}

function handleFormatData(data, type) {
    let response = data !== 'NA' ? data : null

    if (type === 'number' && response !== null){
        response = Number(response)

    }else if (type === 'gender' && response === null){
        response = ''
    }

    return response
}

const modules = {
    removeRepeatedItems,
    handleFormatData
}

module.exports = modules
// module.exports = removeRepeatedItems