const leapYears = function(year) {
    // if year is divisible by 4 and 
    // could be divisible by 400 and not divisible by 100
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }

    return false;
}

module.exports = leapYears
