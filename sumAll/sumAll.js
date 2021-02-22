const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }

    if(num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let sum = 0;

    if(num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    sum = (num2 * (num2 + 1) / 2) - ((num1 - 1) * num1 / 2);

    return sum;
}

module.exports = sumAll
