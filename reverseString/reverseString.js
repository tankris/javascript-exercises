// Reversing a string using recursion
const recur = function(str) {

    if(str === "") {
       return "";
    }

    return recur(str.substr(1)) + str[0];
}

const reverseString = function(str) {
    let revStr = "";

    for(let i = str.length - 1; i >=0; i--) {
        revStr += str[i];
    }

    return recur(str);
}

module.exports = reverseString
