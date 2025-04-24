const sumAll = function(a, b) {
    if ((a < 0 || b < 0) || ((Number.isInteger(a) === false) || Number.isInteger(b) === false) || ((typeof a !== 'number') || (typeof b !== 'number'))) {
        return "ERROR";
    }
    if (a > b) {
        let sum = a;
        while (b != a) {
            sum += b;
            b++;
        }
        return sum;
    } else if (a < b) {
        let sum = b;
        while (a != b) {
            sum += a;
            a++;
        }
        return sum;
    } else  {
        return a;
    }
    

};

// Do not edit below this line
module.exports = sumAll;
