const removeFromArray = function(arr, ...Remove) {
    return arr.filter(number => !Remove.includes(number))
}

module.exports = removeFromArray
