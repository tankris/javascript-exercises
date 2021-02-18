const repeatString = function(stringInput, repeatTimes) {
    let str = "";

    if(repeatTimes < 0) {
        return "ERROR"
    }
    
    for(let i = 0; i < repeatTimes; i++) {
        str += stringInput;
    }
    
    return str;
}

module.exports = repeatString
