const repeatString = function(stringInput, repeatTimes) {
    let str = "";

    for(let i = 0; i < repeatTimes; i++) {
        str += stringInput;
    }

    return str;
}

module.exports = repeatString
